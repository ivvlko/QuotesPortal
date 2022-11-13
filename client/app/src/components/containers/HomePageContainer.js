import { getRandomQuote } from "../../services/genericQueries";
import {useEffect, useState} from "react";

function HomepageContainer(){

    const [quote, setQuote] = useState("");

    async function generateNewQuote(){
        let newQuote = await getRandomQuote();
        setQuote(newQuote);
    }

    useEffect( () => {
        
        async function getQuote(){
            let quote = await getRandomQuote();
            setQuote(quote);
        }
        getQuote();
     }, [])

    return (
        <div>
            <h1>{ quote.quote }</h1>
            <h2>{ quote.author }</h2>

            <button onClick={generateNewQuote}>Get Quote</button>
        </div>

    )
}

export default HomepageContainer;