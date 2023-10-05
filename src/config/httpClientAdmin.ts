import axios from "axios";

const baseURL = "http://localhost:3001/admin"

export const httpClientAdmin = axios.create({
    baseURL
});