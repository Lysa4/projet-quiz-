document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('quiz-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userAnswers = {
            'answer-1': document.querySelector('input[name="answer-1"]:checked')?.value,
            'answer-2': document.querySelector('input[name="answer-2"]:checked')?.value,
            'answer-3': document.querySelector('input[name="answer-3"]:checked')?.value
        };

        let correctAnswersCount = 0;
        for (const [key, value] of Object.entries(userAnswers)) {
            const questionItem = document.querySelector(`input[name="${key}"]`).closest('.question-item');
        
            if (value === 'true') {
                correctAnswersCount++;
                questionItem.style.color = 'green';
            }
             else if (value === 'false') {
                questionItem.style.color = 'red';
             }
            
        }

        if (correctAnswersCount === 3) {
            document.getElementById('alert').style.display = 'block';
            } 
        else {
            document.getElementById('alert').style.display = 'none';
            }

    });
});
