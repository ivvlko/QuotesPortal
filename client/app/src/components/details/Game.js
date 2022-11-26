import React, { useState, useEffect } from 'react';
import { randomShuffleArray, handleAnswer } from '../../services/gameUtils';
import { getEasyQuestion } from '../../services/genericQueries';
import styles from "./Game.module.css";


export default function Game() {

    const [currentQuestion, setCurrentQuestion] = useState(null);

    const [score, setScore] = useState({ correctAnswers: 0, incorrectAnswers: 0 });
    const [gameOver, setGameOver] = useState(false);

    function gameIsOver(score){

        if (score.correctAnswers + score.incorrectAnswers === 9) {
            setGameOver(true);
        }

    }

    async function getQuestion() {
        const response = await getEasyQuestion();
        setCurrentQuestion(() => response);
    }

    useEffect(() => {
        getQuestion();

    }, [])

    function loadQuestionAndOptions(questionObject) {
        let options = questionObject.incorrectAnswers;
        options.push(questionObject.correctAnswer);
        let shuffledOptions = randomShuffleArray(options);

        return (
            <div className={styles.wrapper}>
                <h1>{questionObject.quote}</h1>
                <div className={styles.options}>
                    {
                        shuffledOptions.map((el) => {
                            return <button onClick={handleAnswer.bind(this, score, setScore, currentQuestion, setCurrentQuestion, getQuestion, loadQuestionAndOptions, gameIsOver)} className="standardButton" key={el}>{el}</button>
                        })
                    }
                </div>

                <div>
                    <span>{score.correctAnswers}</span>
                    <span>{score.incorrectAnswers}</span>
                </div>
            </div>
        )
    }

    if (gameOver){

        return (
            <div>
                <h1>Game Over</h1>
                <h2>Correct Answers: {score.correctAnswers}</h2>
                <h2>Incorrect Answers: {score.incorrectAnswers}</h2>
            </div>
        )
    } else{
        
    return (
        <div>
            {currentQuestion ? loadQuestionAndOptions(currentQuestion) : <h1 className={styles.loadingHeader}>Loading Next Question..</h1>}
        </div>
    )
    }

}