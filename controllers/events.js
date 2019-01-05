/*created by Pranav Gupta(pg07codes) on 5/1/19*/

const Event=require('../db/models/event')

module.exports={
    createEvent:
        function(requery){
            //console.log(requery)

            requery.catg=requery.catg.split(',')
            console.log(requery.catg)

            var temp=new Event({
                name:requery.name,
                date:requery.date,
                incharge:requery.incharge,
                phn:requery.phn,
                catg:requery.catg

            })
            return  temp.save()
        }
}