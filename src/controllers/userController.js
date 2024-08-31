const express = require('express');
const UserService = requiere ('../services/userServices');
const router = express.Router();

router.post('/register', async(req, res) =>{
    try{
        const { username, password } = req.body;
        const user = await UserService.register(username, password);
        res.json 
    }
    catch(error){
        res.status(400).json({error: error.message});

    }
})

module.exports = router;