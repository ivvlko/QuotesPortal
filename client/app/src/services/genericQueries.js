import axios from 'axios';


export async function getRandomQuote(){
    const response = await axios.get("http://localhost:8000/quotes/random-quote");
    return await response.data;
}

export async function getEasyQuestion(){
    const response = await axios.get("http://localhost:8000/questions/easy-question");
    return await response.data;
}