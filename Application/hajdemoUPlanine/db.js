const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mina:tutifruti@cluster0.wc5sr.mongodb.net/hajdemouplanine?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then( client => {
    console.log('Povezivanje sa bazom uspesno')
    })
const Planina = require('./planina.model')
