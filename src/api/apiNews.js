import axios from "axios"

const BASE_URL = 'https://api.currentsapi.services/v1/latest-news'
const API_KEY = 'AFB7C53ldl-MOmZkA8WlmoreB707G2Ujxhii1UXZvYh7OdwQ'

export const getNews = async () => {
    console.log(BASE_URL)
    console.log(API_KEY)
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                apiKey: API_KEY
            }
        })
        return response.data
    }
    catch (e) {
        console.log(e)
    }
}