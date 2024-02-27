document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { text: "You're almost always energized by social gatherings and parties. (E/I)", options: ['E', 'I'] },
        { text: "You often spend time exploring unrealistic yet intriguing ideas. (N/S)", options: ['N', 'S'] },
        { text: "Logic and consistency are more important to you than personal circumstances. (T/F)", options: ['T', 'F'] },
        { text: "You believe it's better to finish projects completely before starting a new one. (J/P)", options: ['J', 'P'] },
        { text: "You enjoy having a wide circle of acquaintances. (E/I)", options: ['E', 'I'] },
        { text: "You rely more on your experience than your imagination. (S/N)", options: ['S', 'N'] },
        { text: "You often think about how emotions influence people around you. (F/T)", options: ['F', 'T'] },
        { text: "You prefer to keep your options open and are more spontaneous than planned. (P/J)", options: ['P', 'J'] }
    ];
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const descriptions = {
        ISTJ: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
        ISFJ: "Very dedicated and warm protectors, always ready to defend their loved ones.",
        INFJ: "Quiet and mystical, yet very inspiring and tireless idealists.",
        INTJ: "Proud 'architects', with an imaginative and strategic mind, and a plan for everything."
        INFP: "Idealistic, loyal to their values and to people who are important to them.",
        INTP: "Seek to develop logical explanations for everything that interests them.",
        ESTP: "Flexible and tolerant, take a pragmatic approach focused on immediate results.",
        ESFP: "Outgoing, friendly, and accepting.",
        ENFP: "Warmly enthusiastic and imaginative.",
        ENTP: "Quick, ingenious, stimulating, alert, and outspoken.",
        ESTJ: "Practical, realistic, matter-of-fact.",
        ESFJ: "Warmhearted, conscientious, and cooperative.",
        ENFJ: "Warm, empathetic, responsive, and responsible.",
        ENTJ: "Frank, decisive, assume leadership readily."
    };

    function createQuestions() {
        const container = document.getElementById('questions');
        questions.forEach((question, index) => {
            const div = document.createElement('div');
            div.className = 'question';
            div.innerHTML = `<p>${question.text}</p>`;
            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => handleAnswer(index, option));
                div.appendChild(button);
            });
            container.appendChild(div);
        });
    }

    function handleAnswer(index, option) {
        scores[option]++;
        document.querySelectorAll('.question')[index].style.display = 'none';
        if (index === questions.length - 1) {
            calculateResult();
        }
    }

    function calculateResult() {
        const result = 'EISNTFJP'.split('').reduce((acc, curr, i) => {
            if (i % 2 === 0) {
                return acc + (scores[curr] >= scores['EISNTFJP'.charAt(i + 1)] ? curr : 'EISNTFJP'.charAt(i + 1));
            }
            return acc;
        }, '');
        displayResult(result);
    }

    function displayResult(result) {
        const description = descriptions[result] || "An interesting and unique individual!";
        document.getElementById('result').innerHTML = `<h2>Your MBTI type is: ${result}</h2><p>${description}</p>`;
    }

    createQuestions();
});
