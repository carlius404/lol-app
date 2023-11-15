const mongoose = require("mongoose");
const express=require("express")
const Factor = require('./models/factorModel')
const User = require('./models/userModel')
const cors=require("cors")
const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{res.status(200).json({"mes":1})})

app.post("/api/factor", async(req,res)=>{
    try{
        const factor=await Factor.create(req.body)
        console.log(factor)
        res.status(200).json(factor)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.post("/api/new-user", async (req,res)=>{
    try{
        const user=await User.create(req.body)
        console.log(user)
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

mongoose.connect("mongodb+srv://admin:c69E1imNyuY0hsb1@lolapp.azcb98w.mongodb.net/?retryWrites=true&w=majority").then(()=>{
}).catch((error)=>{
    console.log("error",error)
})
app.listen(5000)


