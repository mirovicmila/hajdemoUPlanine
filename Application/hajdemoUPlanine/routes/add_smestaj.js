var express = require("express");
var router = express.Router();
let Smestaj = require("../server/model/smestaj.model")
router.get('/', function(req, res){
    res.render('add_smestaj', {

    })
})
router.post('/', function(req,res){
    let smestaj = new Smestaj()
    smestaj.imeSmestaja= req.body.imeSmestaja
    smestaj.opis = req.body.opis
    smestaj.planina = req.body.planina
    smestaj.kontakt = req.body.kontakt
    smestaj.tipSmestaja = req.body.tipSmestaja
    smestaj.adresa = req.body.adresa
    smestaj.kategorija= req.body.kategorija
    smestaj.udaljenostOdCentra= req.body.udaljenostOdCentra
    smestaj.prosecnaCenaPoNoci= req.body.prosecnaCenaPoNoci
    smestaj.slika= req.body.slika
    
    smestaj.save(function(err){
        if(err){
            console.log(err)
            return
        } else {
            res.redirect('/')
        }
    })
})
module.exports = router;