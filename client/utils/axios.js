import axios from "axios";

const instance = axios.create({
    // baseURL:"https://internshala-8a7j.onrender.com/",
    baseURL:"http://localhost:8080/",
    withCredentials:true,

});


export default instance;