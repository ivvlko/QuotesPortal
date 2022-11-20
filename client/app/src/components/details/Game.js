import React, { useState, useEffect } from 'react';
import randomShuffleArray from '../../services/gameUtils';
import { getEasyQuestion } from '../../services/genericQueries';

export default function Game() {

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentScore, setCurrentScore] = useState({});

    useEffect(() => {
        async function getQuestion() {
            const response = await getEasyQuestion();
            setCurrentQuestion(() => response);
        }
        getQuestion();
        
    }, [])

    function loadQuestionAndOptions(questionObject){
        let options = questionObject.incorrectAnswers;
        options.push(questionObject.correctAnswer);
        let shuffledOptions = randomShuffleArray(options);

        return (
            <div>
                <h1>{questionObject.quote}</h1>
                {
                    shuffledOptions.map((el) => {
                        return <button key={el}>{el}</button>
                    })
                }
            </div>
        )
    }

    return (
        <div>
            { currentQuestion ? loadQuestionAndOptions(currentQuestion) : "loading.." }
        </div>
    )
}