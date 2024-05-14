document.addEventListener("DOMContentLoaded", function() {
    let questions = document.querySelectorAll('.question');
    let totalQuestions = questions.length;
    let score = 0;
    let incorrect = 0;
    let answeredQuestions = 0;

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

    function updateScore() {
        let scoreDisplay = document.getElementById('score');
        let incorrectDisplay = document.getElementById('incorrect');
        scoreDisplay.textContent = score;
        incorrectDisplay.textContent = incorrect;
    }

    function displayMessage(isCorrect, questionElement, correctAnswer) {
        let messageElement = document.createElement('p');
        messageElement.textContent = isCorrect ? `Great work, you got that one right!` : `Unlucky, the correct answer is ${correctAnswer}`;
        questionElement.appendChild(messageElement);
    }

    function checkAnswer(questionElement, questionId) {
        let options = questionElement.querySelectorAll('.option input[type="radio"]');
        let selectedOption = null;

        options.forEach(function(option) {
            if (option.checked) {
                selectedOption = option;
            }
        });

        if (!selectedOption) {
            alert('Please select an answer before submitting');
            return;
        }

        let selectedValue;
        if (selectedOption) {
        selectedValue = selectedOption.value;
        } else {
        selectedValue = null;
        }

        let correctAnswer = null;
        let matchingQuestion = null;
        for (let i = 0; i < correctAnswerMap.length; i++) {
            if (correctAnswerMap[i].question === questionId) {
            matchingQuestion = correctAnswerMap[i];
                break;
            }
        }
        if (matchingQuestion) {
            correctAnswer = matchingQuestion.answer;
        } else {
            correctAnswer = null;
        }

        let isCorrect = false;
        if (selectedValue !== null && correctAnswer !== null) {
            isCorrect = selectedValue === correctAnswer;
        }

        if (isCorrect) {
            score++;
        }

        answeredQuestions++;
        updateScore();
        displayMessage(isCorrect, questionElement, correctAnswer);

        let submitButton = questionElement.querySelector('.submit-button');
        submitButton.disabled = true;

        if (answeredQuestions === totalQuestions) {
            displayTrophyMessage();
        }
    }

    function displayTrophyMessage() {
        let trophyMessageElement = document.createElement('p');
        let trophyImageElement = document.createElement('img');

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

        document.body.appendChild(trophyMessageElement);
        document.body.appendChild(trophyImageElement);
    }

    questions.forEach(function(question) {
        let questionId = question.id;
        let submitButton = question.querySelector('.submit-button');
        submitButton.addEventListener('click', function() {
            checkAnswer(question,questionId);
        });
    });
});