const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const app = express()
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 5000

app.use(morgan("tiny"))
connectDB()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
let Planina = require('./server/model/planina.model')
let Smestaj = require('./server/model/smestaj.model')
let Atrakcija = require('./server/model/atrakcija.model')
var planina = require("./routes/planina")
var smestaj = require("./routes/smestaj")
var atrakcija = require("./routes/atrakcija")
var update_smestaj= require("./routes/update_smestaj")
var add_smestaj = require("./routes/add_smestaj")
var update_atrakcija= require("./routes/update_atrakcija")
var add_atrakcija = require("./routes/add_atrakcija")
var update_planina = require("./routes/update_planina")
var add_planina = require("./routes/add_planina")
var admin = require("./routes/admin")
app.use("/planina", planina)
app.use("/smestaj", smestaj)
app.use("/atrakcija", atrakcija)
app.use("/smestaji/edit", update_smestaj)
app.use("/smestaji/add", add_smestaj)
app.use("/atrakcije/add", add_atrakcija)
app.use("/atrakcije/edit", update_atrakcija)
app.use("/planine/edit", update_planina)
app.use("/planine/add", add_planina)
app.use("/admin", admin)
app.get('/', function(req, res){
    Smestaj.find({}, function(err, smestaji){
        if(err){
            console.log(err);
        }
        else {
            Planina.find({}, function(err,planine){
                if(err){
                    console.log(err)
                } else{
                    Atrakcija.find({}, function(err, atrakcije){
                        if(err){
                            console.log(err)
                        } else{
                            res.render('index', {
                                planine: planine,
                                smestaji: smestaji,
                                atrakcije: atrakcije
                                
                            })
        
                        }
                    }) 
                }
            })    
        }
    })
   
    
})

app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`)
})