const express = require('express');
const router = express.Router();
const axios = require('axios');
const { request } = require('express');

const db = require('../models');

let API_KEY = process.env.API_KEY;

router.get('/', (req, res)=>{
    db.favs.findAll()
    .then(response => {
        red.render('faves', { favs: response })
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
})

router.post('/', (req, res)=>{
    let movieData = req.body;
    db.fav.findOrCreate({
        where: { title: movieData.title },
        defaults: { imdbid: movieData.imdbid }
    })
    .then(([newFave, created]) => {
        console.log(`This was created: ${created}`)
        res.redirect('faves')
    })
    .catch(err => {
        console.log("error:", err)
    })
})

module.exports = router;