// ===== Vocabulary Data (Tokyo Shoseki New Horizon 1) =====
const vocabulary = [
    { japanese: "こんにちは", english: "hello" },
    { japanese: "ありがとう", english: "thank you" },
    { japanese: "さようなら", english: "goodbye" },
    { japanese: "はい", english: "yes" },
    { japanese: "いいえ", english: "no" },
    { japanese: "私", english: "I" },
    { japanese: "あなた", english: "you" },
    { japanese: "彼", english: "he" },
    { japanese: "彼女", english: "she" },
    { japanese: "これ", english: "this" },
    { japanese: "それ", english: "that" },
    { japanese: "本", english: "book" },
    { japanese: "ペン", english: "pen" },
    { japanese: "学校", english: "school" },
    { japanese: "先生", english: "teacher" },
    { japanese: "生徒", english: "student" },
    { japanese: "友達", english: "friend" },
    { japanese: "犬", english: "dog" },
    { japanese: "猫", english: "cat" },
    { japanese: "好き", english: "like" },
    { japanese: "名前", english: "name" },
    { japanese: "時間", english: "time" },
    { japanese: "今日", english: "today" },
    { japanese: "明日", english: "tomorrow" },
    { japanese: "昨日", english: "yesterday" },
    { japanese: "朝", english: "morning" },
    { japanese: "午後", english: "afternoon" },
    { japanese: "夜", english: "night" },
    { japanese: "食べる", english: "eat" },
    { japanese: "飲む", english: "drink" },
    { japanese: "行く", english: "go" },
    { japanese: "来る", english: "come" },
    { japanese: "見る", english: "see" },
    { japanese: "聞く", english: "hear" },
    { japanese: "話す", english: "speak" },
    { japanese: "読む", english: "read" },
    { japanese: "書く", english: "write" },
    { japanese: "大きい", english: "big" },
    { japanese: "小さい", english: "small" },
    { japanese: "新しい", english: "new" },
    { japanese: "古い", english: "old" },
    { japanese: "良い", english: "good" },
    { japanese: "悪い", english: "bad" },
    { japanese: "赤", english: "red" },
    { japanese: "青", english: "blue" },
    { japanese: "黄色", english: "yellow" },
    { japanese: "緑", english: "green" },
    { japanese: "白", english: "white" },
    { japanese: "黒", english: "black" },
    { japanese: "一", english: "one" },
    { japanese: "二", english: "two" },
    { japanese: "三", english: "three" },
    { japanese: "四", english: "four" },
    { japanese: "五", english: "five" },
    { japanese: "六", english: "six" },
    { japanese: "七", english: "seven" },
    { japanese: "八", english: "eight" },
    { japanese: "九", english: "nine" },
    { japanese: "十", english: "ten" },
];

// ===== Game State =====
let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
let streak = 0;
let totalAnswered = 0;
let currentWord = null;
let shuffledVocabulary = [];

// ===== DOM Elements =====
const japaneseWordEl = document.getElementById('japanese-word');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackMessage = document.getElementById('feedback-message');
const correctAnswerDisplay = document.getElementById('correct-answer-display');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const accuracyEl = document.getElementById('accuracy');
const progressFill = document.getElementById('progress-fill');
const restartBtn = document.getElementById('restart-btn');
const attemptDots = [
    document.getElementById('attempt-1'),
    document.getElementById('attempt-2'),
    document.getElementById('attempt-3')
];

// ===== Audio Context for Sound Effects =====
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// ===== Sound Effect Functions =====
function playCorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playIncorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// ===== Speech Synthesis for Pronunciation =====
function speakWord(word) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.7; // Slow down for beginners
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
}

// ===== Initialize Game =====
function initGame() {
    // Shuffle vocabulary
    shuffledVocabulary = [...vocabulary].sort(() => Math.random() - 0.5);

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    totalAnswered = 0;

    // Update UI
    totalQuestionsEl.textContent = shuffledVocabulary.length;
    updateStats();

    // Load first question
    loadQuestion();
}

// ===== Load Question =====
function loadQuestion() {
    if (currentQuestionIndex >= shuffledVocabulary.length) {
        showFinalResults();
        return;
    }

    currentWord = shuffledVocabulary[currentQuestionIndex];
    attempts = 0;

    // Update UI
    japaneseWordEl.textContent = currentWord.japanese;
    answerInput.value = '';
    answerInput.disabled = false;
    submitBtn.disabled = false;
    nextBtn.style.display = 'none';
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback-message';
    correctAnswerDisplay.textContent = '';
    correctAnswerDisplay.className = 'correct-answer-display';

    // Reset attempt dots
    attemptDots.forEach(dot => dot.classList.remove('used'));

    // Update progress
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    updateProgressBar();

    // Focus input
    answerInput.focus();
}

// ===== Check Answer =====
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWord.english.toLowerCase();

    if (!userAnswer) {
        return;
    }

    if (userAnswer === correctAnswer) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

// ===== Handle Correct Answer =====
function handleCorrectAnswer() {
    score++;
    streak++;
    totalAnswered++;

    // Play sound
    playCorrectSound();

    // Update UI
    feedbackMessage.textContent = '✓ 正解！';
    feedbackMessage.className = 'feedback-message correct';
    correctAnswerDisplay.textContent = currentWord.english;
    correctAnswerDisplay.className = 'correct-answer-display show-correct';

    // Speak the word
    speakWord(currentWord.english);

    // Disable input
    answerInput.disabled = true;
    submitBtn.disabled = true;

    // Show next button
    nextBtn.style.display = 'block';

    // Update stats
    updateStats();
}

// ===== Handle Incorrect Answer =====
function handleIncorrectAnswer() {
    attempts++;
    streak = 0;

    // Play sound
    playIncorrectSound();

    // Mark attempt dot
    if (attempts <= 3) {
        attemptDots[attempts - 1].classList.add('used');
    }

    if (attempts >= 3) {
        // Show correct answer after 3 attempts
        totalAnswered++;

        feedbackMessage.textContent = '✗ 不正解';
        feedbackMessage.className = 'feedback-message incorrect';
        correctAnswerDisplay.textContent = `正解: ${currentWord.english}`;
        correctAnswerDisplay.className = 'correct-answer-display show-incorrect';

        // Speak the word
        speakWord(currentWord.english);

        // Disable input
        answerInput.disabled = true;
        submitBtn.disabled = true;

        // Show next button
        nextBtn.style.display = 'block';

        // Update stats
        updateStats();
    } else {
        // Show feedback but allow retry
        feedbackMessage.textContent = `✗ 不正解 (残り${3 - attempts}回)`;
        feedbackMessage.className = 'feedback-message incorrect';

        // Clear input and focus
        answerInput.value = '';
        answerInput.focus();
    }
}

// ===== Update Stats =====
function updateStats() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;

    const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
    accuracyEl.textContent = `${accuracy}%`;
}

// ===== Update Progress Bar =====
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledVocabulary.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// ===== Next Question =====
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// ===== Show Final Results =====
function showFinalResults() {
    const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

    japaneseWordEl.textContent = '完了！';
    answerInput.style.display = 'none';
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    feedbackMessage.textContent = `お疲れ様でした！`;
    feedbackMessage.className = 'feedback-message correct';
    correctAnswerDisplay.textContent = `正解数: ${score} / ${totalAnswered} (${accuracy}%)`;
    correctAnswerDisplay.className = 'correct-answer-display show-correct';

    attemptDots.forEach(dot => dot.style.display = 'none');
}

// ===== Event Listeners =====
submitBtn.addEventListener('click', checkAnswer);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', () => {
    // Reset UI elements
    answerInput.style.display = 'flex';
    submitBtn.style.display = 'block';
    attemptDots.forEach(dot => dot.style.display = 'block');

    // Restart game
    initGame();
});

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    initGame();
});
