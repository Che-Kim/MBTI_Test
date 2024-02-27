const questions = [
    { question: "You find it easy to introduce yourself to other people.", dimension: "EI", direction: 1, meaning: "E" },
    { question: "You often get so lost in thoughts that you ignore or forget your surroundings.", dimension: "SN", direction: -1, meaning: "N" },
    // Add more questions as needed
];

function displayQuestions() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${q.question}</p>
            <label><input type="radio" name="q${index}" value="1"> Agree</label>
            <label><input type="radio" name="q${index}" value="0"> Neutral</label>
            <label><input type="radio" name="q${index}" value="-1"> Disagree</label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function submitAnswers() {
    let results = { EI: 0, SN: 0, TF: 0, JP: 0 };
    questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`)?.value;
        if (answer) {
            results[q.dimension] += q.direction * answer;
        }
    });

    let mbtiType = '';
    mbtiType += (results.EI >= 0) ? 'E' : 'I';
    mbtiType += (results.SN >= 0) ? 'S' : 'N';
    mbtiType += (results.TF >= 0) ? 'T' : 'F';
    mbtiType += (results.JP >= 0) ? 'J' : 'P';

    document.getElementById('result').textContent = `Your MBTI Type: ${mbtiType}`;
}

// Initialize the quiz on page load
window.onload = displayQuestions;
