const questions = [
    { question: "What does JS stand for?", answers: ["Java Syntax", "JavaScript", "Just Script", "Jolly Syntax"], correct: "JavaScript" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answers: ["var", "int", "string", "let"], correct: "var" },
    { question: "Which method is used to print to the console?", answers: ["print()", "log()", "console.log()", "write()"], correct: "console.log()" },
    { question: "Which of the following is a JavaScript framework?", answers: ["Django", "React", "Laravel", "Flask"], correct: "React" },
    { question: "What is the output of `typeof([])`?", answers: ["array", "object", "list", "undefined"], correct: "object" },
    { question: "Which operator is used for strict equality comparison?", answers: ["==", "===", "!=", "!=="], correct: "===" },
    { question: "Which function is used to parse a string to an integer?", answers: ["parseInt()", "parseFloat()", "Number()", "toString()"], correct: "parseInt()" },
    { question: "Which keyword is used to define a constant variable?", answers: ["const", "let", "var", "final"], correct: "const" },
    { question: "How do you create an alert in JavaScript?", answers: ["msg()", "alert()", "popup()", "notify()"], correct: "alert()" },
    { question: "Which method is used to add an element to an array?", answers: ["push()", "add()", "append()", "insert()"], correct: "push()" },
    { question: "What does `NaN` stand for?", answers: ["Not a Number", "New and Null", "No Assigned Number", "Not a Null"], correct: "Not a Number" },
    { question: "Which function converts a number to a string?", answers: ["String()", "toString()", "convertToString()", "parseString()"], correct: "toString()" },
    { question: "Which loop is best used when the number of iterations is known?", answers: ["while", "for", "do-while", "foreach"], correct: "for" },
    { question: "Which function removes the last element from an array?", answers: ["pop()", "shift()", "remove()", "splice()"], correct: "pop()" },
    { question: "How do you write a single-line comment in JavaScript?", answers: ["<!-- comment -->", "// comment", "/* comment */", "' #comment"], correct: "// comment" },
    { question: "Which built-in method joins array elements into a string?", answers: ["concat()", "join()", "combine()", "toString()"], correct: "join()" },
    { question: "Which event is triggered when an HTML element is clicked?", answers: ["onhover", "onclick", "onpress", "onchange"], correct: "onclick" },
    { question: "What does `typeof null` return?", answers: ["null", "undefined", "object", "string"], correct: "object" },
    { question: "Which keyword is used to define a function?", answers: ["define", "function", "fn", "def"], correct: "function" },
    { question: "Which method returns the length of an array?", answers: ["size()", "length()", "count()", "len()"], correct: "length" },
    { question: "Which function is used to execute a function after a delay?", answers: ["setTimeout()", "setInterval()", "delay()", "wait()"], correct: "setTimeout()" },
    { question: "Which loop executes at least once regardless of condition?", answers: ["for", "while", "do-while", "foreach"], correct: "do-while" },
    { question: "What is the correct way to check if a variable is an array?", answers: ["typeof arr", "Array.isArray(arr)", "arr.isArray()", "arr.type()"], correct: "Array.isArray(arr)" },
    { question: "Which object represents the browser window in JavaScript?", answers: ["document", "window", "screen", "navigator"], correct: "window" },
    { question: "Which symbol is used for comments in JavaScript?", answers: ["#", "//", "--", "/* */"], correct: "//" },
    { question: "Which operator is used to concatenate strings?", answers: ["+", "&", ".", ","], correct: "+" },
    { question: "Which method removes the first element from an array?", answers: ["shift()", "pop()", "unshift()", "splice()"], correct: "shift()" },
    { question: "Which function rounds a number to the nearest integer?", answers: ["Math.ceil()", "Math.round()", "Math.floor()", "Math.random()"], correct: "Math.round()" },
    { question: "Which JavaScript method can be used to find an element by ID?", answers: ["getElementById()", "querySelector()", "getElement()", "findById()"], correct: "getElementById()" },
    { question: "Which method converts a JSON string to an object?", answers: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.objectify()"], correct: "JSON.parse()" },
    { question: "Which property refers to the length of a string?", answers: ["size", "length", "count", "chars"], correct: "length" },
    { question: "Which method is used to repeatedly execute a function at set intervals?", answers: ["setInterval()", "setTimeout()", "repeat()", "setDelay()"], correct: "setInterval()" },
    { question: "Which statement stops a loop?", answers: ["break", "continue", "exit", "return"], correct: "break" },
    { question: "What is the purpose of `this` keyword?", answers: ["Refers to current function", "Refers to global object", "Refers to the current object", "Refers to previous function"], correct: "Refers to the current object" },
    { question: "Which operator is used for logical AND?", answers: ["&&", "||", "!", "&"], correct: "&&" },
    { question: "Which keyword is used to handle exceptions in JavaScript?", answers: ["catch", "try", "error", "throw"], correct: "try" },
    { question: "Which function generates a random number?", answers: ["Math.random()", "random()", "Number.random()", "generateRandom()"], correct: "Math.random()" },
    { question: "Which method is used to add elements at the beginning of an array?", answers: ["push()", "unshift()", "shift()", "prepend()"], correct: "unshift()" },
    { question: "Which object is used to store key-value pairs?", answers: ["Array", "Set", "Map", "Object"], correct: "Object" },
    { question: "Which function converts a number to a fixed number of decimals?", answers: ["toFixed()", "round()", "decimal()", "setDecimals()"], correct: "toFixed()" },
    { question: "Which method returns an array of an object’s keys?", answers: ["Object.values()", "Object.keys()", "Object.entries()", "Object.listKeys()"], correct: "Object.keys()" },
    { question: "Which function delays code execution until the next event loop?", answers: ["setTimeout()", "setInterval()", "nextTick()", "queueMicrotask()"], correct: "queueMicrotask()" },
    { question: "What will `0 == false` return?", answers: ["true", "false", "undefined", "error"], correct: "true" },
    { question: "Which function removes whitespace from both ends of a string?", answers: ["trim()", "strip()", "cut()", "clean()"], correct: "trim()" }
];

// Selecting HTML elements by their IDs
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer");

// Initializing variables
let currentQuestionIndex = 0; // Tracks the current question number
let score = 0; // Stores the user's score
let timeLeft = 10; // Time limit for each question
let timer; // Stores the timer reference

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset to first question
    score = 0; // Reset score
    nextButton.innerText = "Next"; // Set button text to "Next"
    nextButton.style.display = "none"; // Hide "Next" button initially
    scoreDisplay.innerText = ""; // Clear previous score display
    showQuestion(); // Display the first question
}

// Function to display a question
function showQuestion() {
    resetState(); // Clear previous answers and reset timer

    let currentQuestion = questions[currentQuestionIndex]; // Get current question object

    // Display the question number and text
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Define icons to show before answer choices
    const icons = ["🔎", "💻", "📖", "✏"];

    // Loop through the answer choices and create buttons
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `<span class="icon">${icons[index]}</span> ${answer}`;
        button.classList.add("btn");

        // Add event listener to check answer when clicked
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion.correct));
        answerButtons.appendChild(button); // Add button to the answer section
    });

    startTimer(); // Start the countdown timer
}

// Function to reset the question area before displaying the next one
function resetState() {
    nextButton.style.display = "none"; // Hide the "Next" button
    clearInterval(timer); // Stop any existing timer
    timeLeft = 10; // Reset timer to 10 seconds
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;
    timerDisplay.style.color = "black"; // Reset timer color

    // Remove all previous answer buttons
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to start the timer for each question
function startTimer() {
    timer = setInterval(() => {
        timeLeft--; // Decrease time left
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;

        // Change timer color to red when only 3 seconds remain
        if (timeLeft <= 3) {
            timerDisplay.style.color = "red";
        }

        // If time runs out, automatically skip to the next question
        if (timeLeft === 0) {
            clearInterval(timer);
            autoSkipQuestion();
        }
    }, 1000); // Run every second
}

// Function to handle when an answer is selected
function selectAnswer(button, answer, correctAnswer) {
    clearInterval(timer); // Stop the timer since an answer is selected

    const buttons = answerButtons.children; // Get all answer buttons
    for (let btn of buttons) {
        // Highlight the correct answer in green
        if (btn.innerText.includes(correctAnswer)) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong"); // Mark incorrect answers as red
        }
        btn.disabled = true; // Disable all answer buttons after selection
    }

    // Increase score if the selected answer is correct
    if (answer === correctAnswer) {
        score++;
    }

    // Show the "Next" button
    nextButton.style.display = "block";
}

// Function to handle when time runs out before selecting an answer
function autoSkipQuestion() {
    const buttons = answerButtons.children;
    for (let btn of buttons) {
        btn.classList.add("wrong"); // Mark all answers as incorrect
        btn.disabled = true; // Disable all buttons
    }
    nextButton.style.display = "block"; // Show "Next" button
}

// Event listener for "Next" button (handles both next question & restart)
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Move to the next question
        showQuestion(); // Display next question
    } else {
        endQuiz(); // End the quiz if all questions are answered
    }
});

// Function to handle the end of the quiz
function endQuiz() {
    questionElement.innerText = "🎉 Quiz Completed!"; // Show completion message
    answerButtons.innerHTML = ""; // Clear answer buttons
    scoreDisplay.innerText = `Your Score: ${score} / ${questions.length}`; // Display final score

    nextButton.innerText = "Restart"; // Change button text to "Restart"
    nextButton.style.display = "block"; // Show the restart button

    // Reset the quiz when restart button is clicked
    nextButton.onclick = () => {
        startQuiz();
    };
}

// Start the quiz when the page loads
startQuiz();
