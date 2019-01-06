/*created by Pranav Gupta(pg07codes) on 5/1/19*/

const mongoose=require('mongoose')
const Schema = mongoose.Schema;

// Schema is defined over here

const eventSchema = new Schema({
    name:{
        type:String,
    },
    date:{
        type: Date,
    },
    incharge:{
        type:String,
    },
    phn:{
        type:Number,
    },
    catg:[{
        type: String,
    }]
});




const event = mongoose.model('event',eventSchema)


module.exports=event