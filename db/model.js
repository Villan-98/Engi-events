const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

// define all schemas over here

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




// create all models here

const user = mongoose.model('user',userSchema)



mongoose.connection.once('open',()=>{
    console.log('made db connection')
}).on('error',((error)=>{
    console.log("error in connection",error)
}))
module.exports=user


