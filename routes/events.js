const route=require('express').Router()
const ctrl=require('../controllers/events')
function authenticate(){

}
route.get('/',((r,s)=>{
    s.send("On the event page")
}))
route.get('/add',((r,s)=>{
    if(r.isAuthenticated())
        s.render("newEvent")
    else
        s.redirect('/auth/signin')
}))

route.get('/all',((r,s)=>{

    if(r.isAuthenticated())
    s.render("allEvents")
    else
    s.redirect('/auth/signin')
}))

route.post('/newEvent',(req,res)=>{
    if(r.isAuthenticated())
    {
        ctrl.createEvent(req.body)
            .then((data)=>{
            console.log(data)
        console.log("Event Created")
        res.redirect('/events/all')
        })
        .catch(e=>res.err({'internal server error':'400'}))
    }
    else
    {
        res.redirect('auth/signin')
    }

})

module.exports=route