const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const teamSchema=new Schema({
    teamName:{
        type:String,
        unique:true,
    },
    headName:{
        type:String,
    },
    memberCount:{
        type:String,
    },
    subCategory:{
        type:String,
    },
    emailId:{
        type:String,
        unique:true,
    },
    contactNo:{
        type:String,
        unique:true,
    },
    collegeName:{
        type:String,
    },
    eventName:{
        type:String,
    }
})


const team = mongoose.model('team',teamSchema)
module.exports=team