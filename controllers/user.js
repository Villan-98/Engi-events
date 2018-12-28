const User=require('../db/models/user')
module.exports={
    createUser:
        function(requery){
        console.log(requery)

        var temp=new User({
            username:requery.name,
            password:requery.password
        })
       return  temp.save()
    }
}