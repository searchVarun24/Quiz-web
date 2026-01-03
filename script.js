const questions = [
    // Question 1
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

// Question 2
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },

// Question 3
    {
    question: "Which CSS layout makes elements flexible and responsive?",
    options: ["Grid", "Float", "Flexbox", "Position"],
    correct: 2
    },

// Question 4
    {
    question: "Which symbol is used for assignment in JavaScript?",
    options: ["==", "=", "===", "!="],
    correct: 1
    },

// Question 5
    {
        question: "Which is not a JavaScript framework?",
        options: ["Python", "React", "Angular", "Vue"],
        correct: 0
    },


// Question 6
    {
        question: "Which tag is used to define JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: 0
    },

// Question 7

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        correct: 0
    }
];
// Quiz state variables
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    selectedOption = null;
    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", () => selectOption(btn, index));
        optionsEl.appendChild(btn);
    });
}
// it is used to select option
function selectOption(button, index) {
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
    selectedOption = index;
}
// IT'S NEXT QUESTION FUNCTION
function nextQuestion() {
    if (selectedOption === null) {
        alert("Please select an option!");
        return;
    }

    if (selectedOption === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score").textContent =
        `Your Score: ${score} / ${questions.length}`;
}
