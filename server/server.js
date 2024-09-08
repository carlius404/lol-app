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
        console.log("www",factor)
        res.status(200).send(factor._id)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.post("/api/user", async (req,res)=>{
    console.log("CREATING ACCOUNT")
    try{
        console.log("REQ BODY",req.body)
        const user=await User.create(req.body)
        
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/api/user/:uid", async (req, res) => {
    try {
        console.log("UID",req.params.uid)
        const user = await User.findOne({ uid: req.params.uid });
        console.log("USER",user)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put("/api/user/:uid/factor/:id", async (req,res)=>{
    try{
        const user= await User.findOne({uid:req.params.uid})
        user.factors.push(req.params.id)
        await user.save()
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.delete("/api/user/:uid/factor/:id", async(req,res)=>{
    try{
        const user= await User.findOne({uid:req.params.uid})
        user.factors.pull(req.params.id)
        await user.save()
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


