var express = require("express");
var router = express.Router();
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/', function(req, res){
    res.render('add_atrakcija', {

    })
})
router.post('/', function(req,res){
    let atrakcija = new Atrakcija()
    atrakcija.imeAtrakcije= req.body.imeAtrakcije
    atrakcija.opis= req.body.opis
    atrakcija.cena= req.body.cena
    atrakcija.kontakt= req.body.kontakt
    atrakcija.lokacija = req.body.lokacija
    atrakcija.radnoVreme= req.body.radnoVreme
    atrakcija.planina= req.body.planina
    atrakcija.vebLokacija= req.body.vebLokacija
    atrakcija.video= req.body.video
    atrakcija.slika= req.body.slika
    atrakcija.save(function(err){
        if(err){
            console.log(err)
            return
        } else {
            res.redirect('/')
        }
    })
})
module.exports = router;