const User=require('../db/model').user
module.exports={
    createUser:async((requery)=>{
        console.log(requery)
        var temp=new User({
            username:requery.name,
            password:requery.password
        })
        temp.save()
    })
}