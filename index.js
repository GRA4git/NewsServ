const express = require("express")
const mongoose = require("mongoose")

const app = express()

const PORT = 8000

app.use(express.json())
// app.use(require("./routes"))

async function start(){
    try{
        await mongoose.connect("mongodb+srv://Den:Gizmor@cluster0.rgsm1.mongodb.net/NewsServ")
        app.listen(PORT, ()=>{
            console.log("server startanul", PORT)
        })
    }catch(e){
        console.log("error")
    }
}
start()