const http = require('http');
const express = require("express")
const path = require('path');
const {Server} = require("socket.io");
const app = express();


const port = 4000;
const server = http.createServer(app);
const io = new Server(server);
// here io is handleing the sockets


//connection
io.on("connection",(socket) =>{
        // socket is basically a client and every socket have a id
        // console.log("A new user has connected ",socket.id);
        socket.on("user-message",(message)=>{
            // console.log("A new User Message ",message);
            //sending message to each client that u received from frontend
            io.emit("message",message)
        });
});


app.use(express.static(path.resolve("./public")));


// app.get("/",(req,res)=>{
//     return res.sendFile("/public/index.html");
// })


server.listen(port,()=>{
    console.log("Server is running on port "+port);
})