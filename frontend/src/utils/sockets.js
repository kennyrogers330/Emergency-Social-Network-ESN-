import { io } from 'socket.io-client'
const apiUrl = import.meta.API_URL;

export const socket = io.connect(apiUrl, { autoConnect: false })
