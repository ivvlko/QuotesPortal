export function randomShuffleArray(arr){

    let originalArrayCopy = [...arr];
    let shuffledArray = [];

    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * (originalArrayCopy.length - 1 - 0 + 1) + 0);
        shuffledArray.push(originalArrayCopy[randomIndex]);
        originalArrayCopy.splice(randomIndex, 1);
    }

    return shuffledArray;

}


export function handleAnswer( score, setScore, currentQuestion, setCurrentQuestion, getQuestion, loadQuestionAndOptions, e){
    let newState = {...score};
    if (currentQuestion.correctAnswer === e.target.innerHTML){
        newState = {
            correctAnswers: score.correctAnswers + 1,
            incorrectAnswers: score.incorrectAnswers,
        }

    } else{
        newState = {
            correctAnswers: score.correctAnswers,
            incorrectAnswers: score.incorrectAnswers + 1,
        }
    }   
    setScore(newState);
    getQuestion();
    setCurrentQuestion(null);
    loadQuestionAndOptions(currentQuestion);
}