import { io } from 'socket.io-client'
const apiUrl = import.meta.env.API_URL;

export const socket = io.connect("https://fse-rw-s24-rw1-backend.onrender.com", { autoConnect: false })
