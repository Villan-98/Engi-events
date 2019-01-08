const Team=require('../db/models/team')
module.exports={
    registerTeam:
    function(requery){

        const temp=new Team({
            teamHead:requery.teamHead,
            teamName:requery.teamName,
            memberCount:requery.memberCount,
            collegeName:requery.collegeName,
            contactNo:requery.contactNo,
            emailId:requery.emailId,
            eventName:requery.eventName,
            subCategory:requery.subCategory

        })
        return temp.save()

    },
    findTeam:
    function(requery){
        return Team.findOne({
            teamName:requery.teamName
        })
    }
}
