import Axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3Mjk2NDEwNjQsImV4cCI6MTcyOTcyNzQ2NH0.cWcRQAZYVSVs2Jjf4MSLoBwexQoHoGsHJN8BkTzvB3M"

export const axios = Axios.create({
    baseURL: 'http://localhost:3100',
    headers: { Authorization: `Bearer ${token}` }
})