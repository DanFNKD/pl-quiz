// Listen for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {

    // Variables to store references and keep track of scores, incorrect answers and answered questions
    let questions = document.querySelectorAll('.question');
    let totalQuestions = questions.length;
    let score = 0;
    let incorrect = 0;
    let answeredQuestions = 0;

    // Array mapping each question ID to the correct answer
    let correctAnswerMap = [
        { question: 'question1', answer: 'Brian Deane' },
        { question: 'question2', answer: 'Man Utd' },
        { question: 'question3', answer: 'Man City' },
        { question: 'question4', answer: 'Alan Shearer' },
        { question: 'question5', answer: 'Shane Long' },
        { question: 'question6', answer: 'Arsene Wenger' },
        { question: 'question7', answer: 'Liverpool & Wimbledon' },
        { question: 'question8', answer: 'Gareth Barry' },
        { question: 'question9', answer: 'Brad Friedel' },
        { question: 'question10', answer: 'Neil Sullivan' },
        { question: 'question11', answer: 'Mohamed Salah' },
        { question: 'question12', answer: 'Man City 2017/2018' },
        { question: 'question13', answer: 'Sam Allardyce' },
        { question: 'question14', answer: 'Man Utd' },
        { question: 'question15', answer: 'Craig Bellamy' },
        { question: 'question16', answer: '49 matches' },
        { question: 'question17', answer: 'Hugo Lloris' },
        { question: 'question18', answer: 'Teddy Sheringham' },
        { question: 'question19', answer: 'Nicolas Anelka' },
        { question: 'question20', answer: 'Sunderland' },
        { question: 'question21', answer: 'Chelsea' },
        { question: 'question22', answer: 'Nemanja Vidic' },
        { question: 'question23', answer: 'Hull 2016/2017' },
        { question: 'question24', answer: 'Brad Friedel' },
        { question: 'question25', answer: 'Mohamed Salah' },
        { question: 'question26', answer: 'WBA 5-5 MUN' },
        { question: 'question27', answer: 'Jamie Vardy' },
        { question: 'question28', answer: 'Spurs v Arsenal' },
        { question: 'question29', answer: 'Henry & De Bruyne' },
        { question: 'question30', answer: 'Chris Wood' },
    ];

    // Function to update the score and incorrect answers
    function updateScore() {
        let scoreDisplay = document.getElementById('score');
        let incorrectDisplay = document.getElementById('incorrect');
        scoreDisplay.textContent = score;
        incorrectDisplay.textContent = incorrect;
    }

    // Function to display a message based on the user's answer
    function displayMessage(isCorrect, questionElement, correctAnswer) {
        let messageElement = document.createElement('p');
        messageElement.textContent = isCorrect ? `Great work, you got that one right!` : `Unlucky, the correct answer is ${correctAnswer}`;
        questionElement.appendChild(messageElement);
    }

    // Function to check the user's selected answer against the correct answer
    function checkAnswer(questionElement) {
        let options = questionElement.querySelectorAll('.option input[type="radio"]');
        let selectedOption = null;
        let unansweredQuestions = [];

        // Loops through radio inputs to find the one that is selected
        options.forEach(function(option) {
            if (option.checked) {
                selectedOption = option;
            }
        });

        // Alert to show a user that no option has been selected
        if (!selectedOption) {
            unansweredQuestions.push(questionElement.id);
            return;
        }

        let questionId = questionElement.id;

        let correctAnswer = '';
        for (let i = 0;i < correctAnswerMap.length; i++) {
            if (correctAnswerMap[i].question === questionId) {
                correctAnswer = correctAnswerMap[i].answer;
                break;
            }
        }

        // Determines the value of the selected option
        let selectedValue = selectedOption.value;
        let isCorrect = selectedValue === correctAnswer;

        // Updates the score and incorrect count, displays a message and disables the submit button
        if (isCorrect) {
            score++;
        } else {
            incorrect++;
        }

        updateScore();
        displayMessage(isCorrect, questionElement, correctAnswer);

        // Displays trophy message if all questions are answered
        if (answeredQuestions === totalQuestions) {
            displayTrophyMessage();
            document.getElementById('submit-button').disabled = true;
        }
    }

    // Function to display trophy message based on the user's score
    function displayTrophyMessage() {
        let trophyMessageElement = document.createElement('p');
        let trophyImageElement = document.createElement('img');

        // Determines which message is shown to the user based on their score
        if (score >= 20) {
            trophyMessageElement.textContent = `Congratulations! You earned a Gold trophy for getting ${score} questions correct!`;
            trophyImageElement.src = 'assets/images/trophy1.png';
        } else if (score >= 15) {
            trophyMessageElement.textContent = `Great job! You earned a Silver trophy for getting ${score} questions correct!`;
            trophyImageElement.src = 'assets/images/trophy2.png';
        } else if (score >= 10) {
            trophyMessageElement.textContent = `Good effort! You earned a Bronze trophy for getting ${score} questions correct!`;
            trophyImageElement.src = 'assets/images/trophy3.png';
        } else {
            trophyMessageElement.textContent = `Unlucky! You got ${score} questions correct. Why not retake the quiz for a shot at a trophy?`;
        }

            // Appends message and image to the body of the HTML
        document.body.appendChild(trophyMessageElement);
        document.body.appendChild(trophyImageElement);
    }

    function submitQuiz() {
        console.log("Submit button clicked");
        let allAnswered = true;

        questions.forEach(function(question) {
            let options = question.querySelectorAll('.option input[type="radio"]');
            let selectedOption = Array.from(options).some(option => option.checked);

            if (!selectedOption) {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert("Please answer all of the questions before submitting");
            return;
        }

        questions.forEach(function(question) {
            checkAnswer(question);
        });

        displayTrophyMessage();
        document.getElementById('submit-button').disabled = true;
    }

    // Adds event listeners to the question's submit button
    document.getElementById('submit-button').addEventListener('click', submitQuiz);
});