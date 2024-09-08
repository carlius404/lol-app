const mongoose=require("mongoose")


const Schema=mongoose.Schema
const userSchema=new Schema({
    uid:{
        type:String,
        required:[true,"Please enter the use uid"]
    },
    email:{
        type:String,
        required:[true,"Please enter a valid email"]
    },
    factors:[mongoose.SchemaTypes.ObjectId],
})


module.exports=mongoose.model("User",userSchema)