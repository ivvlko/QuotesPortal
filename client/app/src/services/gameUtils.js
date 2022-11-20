export default function randomShuffleArray(arr){

    let originalArrayCopy = [...arr];
    let shuffledArray = [];

    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * (originalArrayCopy.length - 1 - 0 + 1) + 0);
        shuffledArray.push(originalArrayCopy[randomIndex]);
        originalArrayCopy.splice(randomIndex, 1);
    }

    return shuffledArray;

}