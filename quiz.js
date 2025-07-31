// Define the function to check the answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get selected answer
    const feedback = document.getElementById("feedback"); // Get feedback element

    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // red
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
