import axios from 'axios';


export async function getRandomQuote(){
    const response = await axios.get("http://localhost:8000/quotes/random-quote");
    return await response.data;
}
