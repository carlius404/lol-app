const mongoose=require("mongoose")

const Schema=mongoose.Schema
const factorSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please enter the factor name"]
    },
    formula:{
        type:String,
        required:[true,"Please enter the factor formula"]
    },

    tag:{
        type:Boolean,
        required:[true,"Please enter the tag value (boolean)"]
    },
    public:{
        type: Boolean,
        required: true,
        default: true,
    },
    creator:{
        type:String,
        required:[true,"Please enter a username"]
    },
})

module.exports=mongoose.model("UsersFactors",factorSchema)