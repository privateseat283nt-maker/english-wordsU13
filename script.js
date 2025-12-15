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
let audioContext = null;

// Initialize AudioContext on first user interaction (required for mobile)
function initAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('AudioContext initialized');
        } catch (error) {
            console.error('Failed to initialize AudioContext:', error);
        }
    }

    // Resume AudioContext if it's suspended (common on mobile)
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log('AudioContext resumed');
        }).catch(error => {
            console.error('Failed to resume AudioContext:', error);
        });
    }
}

// ===== Sound Effect Functions =====
function playCorrectSound() {
    if (!audioContext) {
        console.warn('AudioContext not initialized');
        return;
    }

    try {
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
    } catch (error) {
        console.error('Failed to play correct sound:', error);
    }
}

function playIncorrectSound() {
    if (!audioContext) {
        console.warn('AudioContext not initialized');
        return;
    }

    try {
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
    } catch (error) {
        console.error('Failed to play incorrect sound:', error);
    }
}

// ===== Speech Synthesis for Pronunciation =====
let voicesLoaded = false;

// Preload voices for mobile compatibility
function loadVoices() {
    return new Promise((resolve) => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            voicesLoaded = true;
            console.log('Voices loaded:', voices.length);
            resolve(voices);
        } else {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
                const loadedVoices = window.speechSynthesis.getVoices();
                voicesLoaded = true;
                console.log('Voices loaded after event:', loadedVoices.length);
                resolve(loadedVoices);
            }, { once: true });

            // Trigger voice loading on some browsers
            window.speechSynthesis.getVoices();
        }
    });
}

function speakWord(word) {
    console.log('speakWord called with:', word);

    try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Small delay to ensure cancel completes (important for mobile)
        setTimeout(() => {
            try {
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = 'en-US';
                utterance.rate = 0.7; // Slow down for beginners
                utterance.pitch = 1.0;
                utterance.volume = 1.0;

                // Event handlers for debugging
                utterance.onstart = () => {
                    console.log('Speech started:', word);
                };

                utterance.onend = () => {
                    console.log('Speech ended:', word);
                };

                utterance.onerror = (event) => {
                    console.error('Speech error:', event.error, event);
                };

                // Try to select an English voice explicitly
                const voices = window.speechSynthesis.getVoices();
                const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
                if (englishVoice) {
                    utterance.voice = englishVoice;
                    console.log('Using voice:', englishVoice.name);
                }

                console.log('Calling speechSynthesis.speak()');
                window.speechSynthesis.speak(utterance);

            } catch (innerError) {
                console.error('Error in delayed speak:', innerError);
            }
        }, 100); // 100ms delay for mobile compatibility

    } catch (error) {
        console.error('Failed to speak word:', error);
    }
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

    // Preload voices for Speech Synthesis (important for mobile)
    loadVoices().then(() => {
        console.log('Voices ready for use');
    });

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
    nextBtn.classList.add('hidden');
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
    // Initialize AudioContext on first interaction (required for mobile)
    initAudioContext();

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
    nextBtn.classList.remove('hidden');
    console.log('Next button should be visible now, classList:', nextBtn.classList.toString());

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
        nextBtn.classList.remove('hidden');
        console.log('Next button should be visible (after 3 attempts), classList:', nextBtn.classList.toString());

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
    nextBtn.classList.add('hidden');

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
    // Initialize game
    initGame();

    // Initialize Speech Synthesis on first user interaction (required for mobile)
    const initSpeechOnInteraction = () => {
        console.log('User interaction detected, initializing Speech Synthesis');
        loadVoices().then(() => {
            console.log('Speech Synthesis ready after user interaction');
        });

        // Remove listeners after first interaction
        document.removeEventListener('click', initSpeechOnInteraction);
        document.removeEventListener('touchstart', initSpeechOnInteraction);
    };

    // Listen for first user interaction
    document.addEventListener('click', initSpeechOnInteraction, { once: true });
    document.addEventListener('touchstart', initSpeechOnInteraction, { once: true });
});
