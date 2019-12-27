const express = require('express');
const artistController = require('../controllers/artists');
// const loginController = require('../controllers/login');

const router = express.Router();

router.get('/allArtists', artistController.getAllArtists); //good

router.get('/getArtists', artistController.searchArtist); //good

router.get('/deleteArtist', artistController.delArtist); //good

router.post('/addArtist', artistController.postAddPeople); //good

router.get('/', artistController.loginPage); 

router.post('/login', artistController.postLogin); 

module.exports = router;
