import { getRandomQuote } from "../../services/genericQueries";
import {useEffect, useState} from "react";

function HomepageContainer(){

    const [quote, setQuote] = useState("");

    useEffect( () => {
        
        async function getQuote(){
            let quote = await getRandomQuote();
            setQuote(quote);
        }
        getQuote();
     }, [])

    return (
        <div>
            <h1>{ quote }</h1>
        </div>
    )
}

export default HomepageContainer;