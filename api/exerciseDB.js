import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl='https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' 
            }
        };
        const response = await axios.request(options);
        console.log('API Response:', response.data); // Log the response data
        return response.data;
    }
    catch (err) {
        console.log('Q Error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart) => {
    //console.log('fetchExercisesByBodypart bodyPart:', bodyPart);
    let data = await apiCall(baseUrl + '/exercises/bodyPart/${bodyPart}'); 
    return data;
}