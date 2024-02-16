var express = require('express');
var router = express.Router();

const URL = 'https://catfact.ninja/fact'

router.get('/cats/fact', async function(req, res, next){
    const response = await fetch(URL);
    const catFact = await response.json();
    console.log(fact)
    res.render('cats/fact', { title: 'Cat Facts' })
})

module.exports = router;