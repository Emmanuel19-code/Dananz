import axios from "axios";


const instance = axios.create({
   // baseURL:"http://localhost:5000"
   baseURL:"https://dananz-backend.onrender.com"
})

export default instance;