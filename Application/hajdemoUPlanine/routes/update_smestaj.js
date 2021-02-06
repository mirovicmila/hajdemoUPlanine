var express = require("express");
var router = express.Router();
let Smestaj = require("../server/model/smestaj.model")
router.get('/:id', function(req, res){
        Smestaj.findById(req.params.id, function(err, smestaj){
            res.render('update_smestaj', {
                smestaj: smestaj
            })
        })
    })
router.post('/:id', function(req,res){
        let smestaj = {}
        smestaj.imeSmestaja= req.body.imeSmestaja
        smestaj.opis = req.body.opis
        smestaj.planina= req.body.planina
        smestaj.kontakt = req.body.kontakt
        smestaj.tipSmestaja = req.body.tipSmestaja
        smestaj.adresa = req.body.adresa
        smestaj.kategorija= req.body.kategorija
        smestaj.udaljenostOdCentra= req.body.udaljenostOdCentra
        smestaj.prosecnaCenaPoNoci= req.body.prosecnaCenaPoNoci
        smestaj.slika= req.body.slika
        let query = {_id: req.params.id}
        Smestaj.updateOne(query, smestaj, function(err){
            if(err){
                console.log(err)
                return
            } else {
                res.redirect('/')
            }
        })
    })
module.exports = router;