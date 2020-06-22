import axios from "axios";
import config from "../config/config";

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com", 
    headers: {
        Authorization: `Client-ID ${config.token}`
    }
});

export default unsplash;