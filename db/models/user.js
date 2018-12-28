const mongoose=require('mongoose')
const Schema = mongoose.Schema;

// Schema is defined over here

const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
    },
});




const user = mongoose.model('user',userSchema)


module.exports=user