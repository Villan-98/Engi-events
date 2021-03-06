const route=require('express').Router()
const ctrl=require('../controllers/events')
const ctrlTeam=require('../controllers/team')
route.get('/register',(r,s)=>{
    console.log(r.params)
   // console.log(r.query)
    ctrl.eventDetail({name:r.query.category})
        .then((event)=>{
            console.log(event)
            if(event===null)        //if someone alter category to some unknown value
            {
                s.redirect('/')
            }
            s.render('eventRegistration',{event})
        })
})
route.post('/register',(r,s)=>{
    console.log(r.body)
    ctrlTeam.findTeam(r.body)
        .then((data)=>{
            if(data===null)
            {
                ctrlTeam.registerTeam(r.body)
                    .then((data)=>{
                        s.render("regResponse")
                    })
                    .catch((err)=>{
                        console.log(err)
                        s.send("oops something went wrong")
                    })
            }
            else
            {
                //it there already exist a team

                let alert={alert:"plz.register through a different team name"}

                s.render("eventRegistration",{alert})
            }
        })
        .catch((err)=>{
            console.log(err)

            s.send("oops something went wrong")
        })
})
route.get('/registeredTeams',(r,s)=>{
    console.log(r.query)
    ctrlTeam.fetchTeams({eventName:r.query.event})
        .then((teams)=>{
            console.log(teams)
            s.render("registeredTeams",{teams})
        })
})
route.get('/',((r,s)=>{
    ctrl.fetchEvents()
        .then((data)=>{
            console.log(data.name)
            console.log(data)
            s.render('home',data)
        })
        .catch((err)=>{
            console.log(err)
            s.send("Oops something went wrong")
        })

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
        ctrl.fetchEvents()
            .then((events)=>{
                //console.log(data)
                s.render('allEvents',{events})
            })
            .catch((err)=>{
                console.log(err)
                s.send("Oops something went wrong")
            })
    //s.render("allEvents")
    else
    s.redirect('/auth/signin')
}))

route.post('/newEvent',(req,res)=>{
    if(req.isAuthenticated())
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
        res.redirect('/auth/signin')
    }

})

module.exports=route