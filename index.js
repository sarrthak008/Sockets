import express from 'express';
import {createServer} from "http"
import { Server} from 'socket.io'


const PORT = 8000 || process.env.PORT

const app = express() /// creaeting the basic express server.....
const HTTP_SERVER = createServer(app); // creating the HTTP node server that use to run our socket io server tha
const io = new Server(HTTP_SERVER); // create a IO variable that are use to peform every data sharing task....



app.get('/',(req,res)=>{
     res.send("hiii");
     console.log(io)
})


HTTP_SERVER.listen(PORT,()=>{
    console.log(`app run on PORT ${PORT}`)
})
