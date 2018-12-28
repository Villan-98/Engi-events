const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


mongoose.connection.once('open',()=>{
    console.log('made db connection')
}).on('error',((error)=>{
    console.log("error in connection",error)
}))


