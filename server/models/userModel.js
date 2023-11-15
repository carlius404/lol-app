const mongoose=require("mongoose")


const Schema=mongoose.Schema
const User=new Schema({
    uid:{
        type:String,
        required:[true,"Please enter the use uid"]
    },
    username:{
        type:String,
        required:[true,"Please enter a valid username"]
    },
    factors:[mongoose.SchemaTypes.ObjectId],
})


module.exports=mongoose.model("User",userSchema)