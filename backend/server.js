const app=require("express")()//short hand notation for requiring and intitalizing express lib into app
const server=require("http").createServer(app)
const io=require('socket.io')(server,{
    cors:{
        origin:"*",
        // methods:["GET","POST"],
        // allowedHeaders:["my-custom-header"],
        // credentials:true
    }
})
io.on("connection",(socket)=>{
    // console.log("socket info=",socket)
    socket.on("chat",(payload)=>{
        console.log("hello")
        console.log("payload=",payload)
        io.emit("chat",payload)
    })
})
// app.listen(3000,()=>{
//     console.log("express server is running...")
// })
server.listen(5000,()=>{
    console.log("http server is running...")
})