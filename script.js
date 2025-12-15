// ===== Vocabulary Data (Tokyo Shoseki New Horizon 1) =====
const vocabulary = [
    // Basic Greetings & Expressions
    { japanese: "こんにちは", english: "hello" },
    { japanese: "おはよう", english: "good morning" },
    { japanese: "こんばんは", english: "good evening" },
    { japanese: "さようなら", english: "goodbye" },
    { japanese: "ありがとう", english: "thank you" },
    { japanese: "すみません", english: "excuse me" },
    { japanese: "ごめんなさい", english: "sorry" },
    { japanese: "はい", english: "yes" },
    { japanese: "いいえ", english: "no" },
    { japanese: "お願いします", english: "please" },

    // Pronouns
    { japanese: "私", english: "I" },
    { japanese: "あなた", english: "you" },
    { japanese: "彼", english: "he" },
    { japanese: "彼女", english: "she" },
    { japanese: "私たち", english: "we" },
    { japanese: "彼ら", english: "they" },
    { japanese: "これ", english: "this" },
    { japanese: "それ", english: "that" },
    { japanese: "あれ", english: "that" },
    { japanese: "誰", english: "who" },
    { japanese: "何", english: "what" },
    { japanese: "どこ", english: "where" },
    { japanese: "いつ", english: "when" },
    { japanese: "なぜ", english: "why" },
    { japanese: "どのように", english: "how" },

    // School & Study
    { japanese: "学校", english: "school" },
    { japanese: "先生", english: "teacher" },
    { japanese: "生徒", english: "student" },
    { japanese: "クラス", english: "class" },
    { japanese: "教室", english: "classroom" },
    { japanese: "本", english: "book" },
    { japanese: "ペン", english: "pen" },
    { japanese: "鉛筆", english: "pencil" },
    { japanese: "ノート", english: "notebook" },
    { japanese: "机", english: "desk" },
    { japanese: "椅子", english: "chair" },
    { japanese: "黒板", english: "blackboard" },
    { japanese: "宿題", english: "homework" },
    { japanese: "テスト", english: "test" },
    { japanese: "勉強", english: "study" },

    // Family
    { japanese: "家族", english: "family" },
    { japanese: "父", english: "father" },
    { japanese: "母", english: "mother" },
    { japanese: "兄", english: "brother" },
    { japanese: "姉", english: "sister" },
    { japanese: "祖父", english: "grandfather" },
    { japanese: "祖母", english: "grandmother" },
    { japanese: "友達", english: "friend" },

    // Animals
    { japanese: "犬", english: "dog" },
    { japanese: "猫", english: "cat" },
    { japanese: "鳥", english: "bird" },
    { japanese: "魚", english: "fish" },

    // Common Verbs
    { japanese: "食べる", english: "eat" },
    { japanese: "飲む", english: "drink" },
    { japanese: "行く", english: "go" },
    { japanese: "来る", english: "come" },
    { japanese: "見る", english: "see" },
    { japanese: "聞く", english: "hear" },
    { japanese: "話す", english: "speak" },
    { japanese: "読む", english: "read" },
    { japanese: "書く", english: "write" },
    { japanese: "走る", english: "run" },
    { japanese: "歩く", english: "walk" },
    { japanese: "座る", english: "sit" },
    { japanese: "立つ", english: "stand" },
    { japanese: "寝る", english: "sleep" },
    { japanese: "起きる", english: "wake up" },
    { japanese: "作る", english: "make" },
    { japanese: "買う", english: "buy" },
    { japanese: "売る", english: "sell" },
    { japanese: "持つ", english: "have" },
    { japanese: "使う", english: "use" },
    { japanese: "好き", english: "like" },
    { japanese: "愛する", english: "love" },
    { japanese: "知る", english: "know" },
    { japanese: "考える", english: "think" },
    { japanese: "遊ぶ", english: "play" },
    { japanese: "働く", english: "work" },
    { japanese: "住む", english: "live" },
    { japanese: "会う", english: "meet" },

    // Adjectives
    { japanese: "大きい", english: "big" },
    { japanese: "小さい", english: "small" },
    { japanese: "新しい", english: "new" },
    { japanese: "古い", english: "old" },
    { japanese: "良い", english: "good" },
    { japanese: "悪い", english: "bad" },
    { japanese: "高い", english: "tall" },
    { japanese: "低い", english: "short" },
    { japanese: "長い", english: "long" },
    { japanese: "短い", english: "short" },
    { japanese: "速い", english: "fast" },
    { japanese: "遅い", english: "slow" },
    { japanese: "暑い", english: "hot" },
    { japanese: "寒い", english: "cold" },
    { japanese: "美しい", english: "beautiful" },
    { japanese: "楽しい", english: "fun" },
    { japanese: "難しい", english: "difficult" },
    { japanese: "易しい", english: "easy" },
    { japanese: "忙しい", english: "busy" },

    // Colors
    { japanese: "赤", english: "red" },
    { japanese: "青", english: "blue" },
    { japanese: "黄色", english: "yellow" },
    { japanese: "緑", english: "green" },
    { japanese: "白", english: "white" },
    { japanese: "黒", english: "black" },
    { japanese: "茶色", english: "brown" },
    { japanese: "ピンク", english: "pink" },

    // Numbers
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

    // Time
    { japanese: "時間", english: "time" },
    { japanese: "今日", english: "today" },
    { japanese: "明日", english: "tomorrow" },
    { japanese: "昨日", english: "yesterday" },
    { japanese: "朝", english: "morning" },
    { japanese: "午後", english: "afternoon" },
    { japanese: "夜", english: "night" },
    { japanese: "週", english: "week" },
    { japanese: "月", english: "month" },
    { japanese: "年", english: "year" },

    // Places
    { japanese: "家", english: "home" },
    { japanese: "部屋", english: "room" },
    { japanese: "公園", english: "park" },
    { japanese: "店", english: "store" },
    { japanese: "病院", english: "hospital" },
    { japanese: "駅", english: "station" },
    { japanese: "図書館", english: "library" },

    // Food & Drink
    { japanese: "食べ物", english: "food" },
    { japanese: "水", english: "water" },
    { japanese: "お茶", english: "tea" },
    { japanese: "牛乳", english: "milk" },
    { japanese: "パン", english: "bread" },
    { japanese: "米", english: "rice" },
    { japanese: "肉", english: "meat" },
    { japanese: "野菜", english: "vegetable" },
    { japanese: "果物", english: "fruit" },

    // Common Nouns
    { japanese: "名前", english: "name" },
    { japanese: "人", english: "person" },
    { japanese: "子供", english: "child" },
    { japanese: "男", english: "man" },
    { japanese: "女", english: "woman" },
    { japanese: "国", english: "country" },
    { japanese: "町", english: "town" },
    { japanese: "車", english: "car" },
    { japanese: "自転車", english: "bicycle" },
    { japanese: "電車", english: "train" },
    { japanese: "バス", english: "bus" },
    { japanese: "音楽", english: "music" },
    { japanese: "スポーツ", english: "sport" },
    { japanese: "映画", english: "movie" },
    { japanese: "写真", english: "picture" },
    { japanese: "手紙", english: "letter" },
    { japanese: "電話", english: "phone" },
    { japanese: "コンピューター", english: "computer" },
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
// Using Speech Synthesis API with mobile-friendly implementation
function speakWord(word) {
    console.log('speakWord called with:', word);

    try {
        // Ensure speech synthesis is available
        if (!window.speechSynthesis) {
            console.error('Speech Synthesis not supported');
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        // Event handlers
        utterance.onstart = () => {
            console.log('Speech started:', word);
        };

        utterance.onend = () => {
            console.log('Speech ended:', word);
        };

        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            if (event.error === 'not-allowed') {
                console.error('Speech not allowed - user interaction may be required');
            }
        };

        // Get voices and select English voice
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices:', voices.length);

        if (voices.length > 0) {
            // Try to find a good English voice (avoid Google voices as they may cause 404)
            const englishVoice = voices.find(v =>
                v.lang.startsWith('en') && !v.name.includes('Google')
            ) || voices.find(v => v.lang.startsWith('en'));

            if (englishVoice) {
                utterance.voice = englishVoice;
                console.log('Using voice:', englishVoice.name, englishVoice.lang);
            }
        }

        // Small delay to ensure cancel completes
        setTimeout(() => {
            console.log('Calling speechSynthesis.speak()');
            window.speechSynthesis.speak(utterance);

            // Force resume if paused (iOS Safari fix)
            setTimeout(() => {
                if (window.speechSynthesis.paused) {
                    console.log('Speech was paused, resuming...');
                    window.speechSynthesis.resume();
                }
            }, 100);
        }, 100);

    } catch (error) {
        console.error('Failed to speak word:', error);
    }
}

// ===== Initialize Game =====
function initGame() {
    // Shuffle all vocabulary and select 10 random questions
    const allVocabulary = [...vocabulary].sort(() => Math.random() - 0.5);
    shuffledVocabulary = allVocabulary.slice(0, 10); // Take first 10 after shuffle

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
});
