let currentQuestion = 0;
let score = 0;

// Wrapper to avoid trying to get element before the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener("click", startQuiz);
});

const questions = [
    {
        question: "What is Monica's job?",
        options: ["Chef", "Waitress", "Actress"],
        answer: "Chef"
    },
    {
        question: "To get over Richard, what did Monica start making?",
        options: ["Pancakes", "Marmalade", "Jam", "Candy"],
        answer: "Candy"
    },
    {
        question: "Where did Monica and Ross' parents jet off to for Thanksgiving?",
        options: ["Riviera", "Bahamas", "Puerto Rico", "Caribbean"],
        answer: "Puerto Rico"
    },
    {
        question: "How many long-stemmed roses did Ross send to Emily?",
        options: ["100", "86", "52", "72"],
        answer: "72"
    },
    {
        question: "How many lasagnas did Monica make for her aunt?",
        options: ["12", "14", "13", "6"],
        answer: "12"
    },
    {
        question: "What did Joey eat for $50?",
        options: ["a donut", "a bag of chips", "a book", "a glass of fat"],
        answer: "a glass of fat"
    },
    {
        question: "Which Stephen King book did Joey hide in his freezer?",
        options: ["Pet Semetary", "The Shining", "Carrie", "IT"],
        answer: "The Shining"
    },
    {
        question: "What is Ross’ profession?",
        options: ["Geologist", "Palaeontologist", "Astronomer", "Museum Tour Guide"],
        answer: "Palaeontologist"
    },
    {
        question:
            "How many pages were in the letter Rachel wrote to Ross (front and back!)?",
        options: ["12", "8", "3", "18"],
        answer: "18"
    },
    {
        question: "What is the name of Ross's second wife?",
        options: ["Rachel", "Monica", "Emily"],
        answer: "Emily"
    }
];
// Function to display feedback and cumulative score
function displayFeedbackAndScore(feedback) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.innerText = feedback;

    const scoreElement = document.getElementById("scoreFeedback");
    scoreElement.innerText = `Score: ${score}`;
}


// Function to start the quiz
function startQuiz() {
    console.log("Quiz started");
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const currentQuizData = questions[currentQuestion];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";

    currentQuizData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", selectOption);
        optionsElement.appendChild(button);
    });
}

// Function to select an option

function selectOption(e) {
    const selectedOption = e.target.innerText;
    console.log(selectedOption);
    //const scoreElement = document.getElementById("score");
    let feedback = ``;

    if (selectedOption === questions[currentQuestion].answer) {
        score += 10;
        feedback = `Correct!`;
    } else {
        feedback = `Wrong! The correct answer was: ${questions[currentQuestion].answer}`;
    }
    currentQuestion++;
    displayFeedbackAndScore(feedback);
    if (currentQuestion < questions.length) {
        console.log("Next question");
        loadQuestion();
    } else {
        console.log("Quiz ended");
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz");
    const results = document.getElementById("results");
    const scoreElement = document.getElementById("score");
    const restartButton = document.getElementById("restart-button");
    const feedbackArea = document.getElementById("feedbackArea");
    //const nextButton = document.getElementById("nextBtn");

    quizContainer.style.display = "none";
    feedbackArea.style.display = "none";
    console.log(results);
    console.log(results.style);

    results.style.display = "block";
    scoreElement.innerText = `Your Score: ${score}/100`;

    // Logic to rate performance based on score
    // Example: You can add a statement based on the score

    //nextButton.style.display = "block";

    restartButton.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        quizContainer.style.display = "block";
        results.style.display = "none";
        startQuiz();
    });
}


