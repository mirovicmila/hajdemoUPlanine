var express = require("express");
var router = express.Router();
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/:id', function(req, res){
        Atrakcija.findById(req.params.id, function(err, atrakcija){
            res.render('update_atrakcija', {
                atrakcija: atrakcija
            })
        })
    })
router.post('/:id', function(req,res){
        let atrakcija = {}
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
        let query = {_id: req.params.id}
        Atrakcija.updateOne(query, atrakcija, function(err){
            if(err){
                console.log(err)
                return
            } else {
                res.redirect('/')
            }
        })
    })
module.exports = router;