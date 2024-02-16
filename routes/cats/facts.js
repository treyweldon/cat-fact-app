var express = require('express');
var router = express.Router();

const URL = 'https://catfact.ninja/fact'

router.get('/cats/facts', function(req, res, next){
    const catFact = req.query.fact
    fetch(`${URL}`)
        .then(res => res.json());
        .then(fact => {
            res.render('/cat/facts', {fact})
        })
});

module.exports = router;