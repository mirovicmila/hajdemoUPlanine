var express = require("express");
var router = express.Router();
let Planina = require("../server/model/planina.model")
router.get('/:id', function(req, res){
    Planina.findById(req.params.id, function(err, planina){
        res.render('update_planina', {
            planina: planina
        })
    })
})
router.post('/:id', function(req,res){
    let planina = {}
    planina.imePlanine= req.body.imePlanine
    planina.region = req.body.region
    planina.lokacija = req.body.lokacija
    planina.slika= req.body.slika
    let query = {_id: req.params.id}
    Planina.updateOne(query, planina, function(err){
        if(err){
            console.log(err)
            return
        } else {
            res.redirect('/')
        }
    })
})
module.exports = router;