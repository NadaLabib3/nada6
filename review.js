function countAnswers() {
    const questions = [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6"
    ];

    let yesCount = 0;
    let noCount = 0;

    questions.forEach(questionId => {
        const selectedValue = document.querySelector(`input[name=${questionId}]:checked`);
        if (selectedValue) {
            if (selectedValue.value === 'yes') {
                yesCount++;
            } else if (selectedValue.value === 'no') {
                noCount++;
            }
        }
    });

    alert(`Yes: ${yesCount}, No: ${noCount}`);
}