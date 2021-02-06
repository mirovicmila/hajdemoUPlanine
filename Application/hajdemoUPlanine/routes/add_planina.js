var express = require("express");
var router = express.Router();
let Planina = require("../server/model/planina.model")
router.get('/', function(req, res){
    res.render('add_planina', {

    })
})
router.post('/', function(req,res){
    let planina = new Planina()
    planina.imePlanine= req.body.imePlanine
    planina.region = req.body.region
    planina.lokacija = req.body.lokacija
    planina.slika= req.body.slika
    
    planina.save(function(err){
        if(err){
            console.log(err)
            return
        } else {
            res.redirect('/')
        }
    })
})

module.exports = router;