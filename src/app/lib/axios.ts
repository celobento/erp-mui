import Axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3Mjk1NTQxMTMsImV4cCI6MTcyOTY0MDUxM30.pjX8UwtPRBoMij1_noIrQkt40FWVB4TZNgGfhf5xs3s"

export const axios = Axios.create({
    baseURL: 'http://localhost:3100',
    headers: { Authorization: `Bearer ${token}` }
})