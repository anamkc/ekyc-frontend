import axios from "axios";

const baseURL = "http://localhost:3001/fi"

export const httpClientFi = axios.create({
    baseURL
});