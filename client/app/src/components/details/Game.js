import React, { useState, useEffect } from 'react';
import {randomShuffleArray, handleAnswer} from '../../services/gameUtils';
import { getEasyQuestion } from '../../services/genericQueries';
import styles from "./Game.module.css";

export default function Game() {

    const [currentQuestion, setCurrentQuestion] = useState(null);

    const [score, setScore] = useState({correctAnswers: 0, incorrectAnswers: 0}); 

    async function getQuestion() {
        const response = await getEasyQuestion();
        setCurrentQuestion(() => response);
    }

    useEffect(() => {
        getQuestion();
        
    }, [])

    function loadQuestionAndOptions(questionObject){
        let options = questionObject.incorrectAnswers;
        options.push(questionObject.correctAnswer);
        let shuffledOptions = randomShuffleArray(options);

        return (
            <div className={styles.wrapper}>
                <h1>{questionObject.quote}</h1>
                <div className={styles.options}>
                    {
                        shuffledOptions.map((el) => {
                            return <button onClick={handleAnswer.bind(this, score, setScore, currentQuestion, setCurrentQuestion, getQuestion, loadQuestionAndOptions)} className="standardButton" key={el}>{el}</button>
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

    return (
        <div>
            { currentQuestion ? loadQuestionAndOptions(currentQuestion) : <h1 className={styles.loadingHeader}>Loading Next Question..</h1>}
        </div>
    )
}