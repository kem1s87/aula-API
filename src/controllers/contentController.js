const express = require('express');
const contentService = require ('../services/contentService'); 
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const {text} = req.body;
        const content = contentService.createContent(text);
        res.json(content);
    }
    catch(error){
        res.status(400).json({eror: error.message});
    }

})

module.exports = router;