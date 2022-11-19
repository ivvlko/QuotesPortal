import React, { useState, useEffect } from 'react';
import { getEasyQuestion } from '../../services/genericQueries';

export default function Game() {

    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
        async function getQuestion() {
            const response = await getEasyQuestion();
            setCurrentQuestion(() => response);
        }
        getQuestion();
        
    }, [])

    return (
        <div>
            <h1>{ currentQuestion ? currentQuestion.quote : "loading.." }</h1>
        </div>
    )
}