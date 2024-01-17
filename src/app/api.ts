import axios from "axios";

const http = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
});

export const api = {
    getCountries: async () => {
        let response = await http.get('/all')
        return response.data
    },
    getCountry: async ( name:string|string[]) => {
        let response = await http.get(`/name/${name}?fullText=true`)
        return response.data
    },
    getCountryByCode: async (code: string) => {
        let response = await http.get(`/alpha/${code}`)
        return response.data
    }

}
