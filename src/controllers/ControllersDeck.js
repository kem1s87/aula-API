const express = require('express');
const contentService = require('../services/ServicesDeck');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async (req, res) => {
    try {
        const { text } = req.body;
        const content = await ServicesDeck.createDeck(text); 
        res.status(201).json(content); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});

module.exports = router; 
