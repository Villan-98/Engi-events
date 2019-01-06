const route=require('express').Router()
const ctrl=require('../controllers/events')

route.get('/',((r,s)=>{
    s.send("On the event page")
}))
route.get('/add',((r,s)=>{
    s.render("newEvent")
}))

route.get('/all',((r,s)=>{
    s.render("allEvents")
}))

route.post('/newEvent',(req,res)=>{
        ctrl.createEvent(req.body)
            .then((data)=>{
                console.log(data)
                console.log("Event Created")
                res.redirect('/events/all')
            })
            .catch(e=>res.err({'internal server error':'400'}))
})

module.exports=route