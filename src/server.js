const express = require('express');
const userController = require('./controllers/userController');
const contentController = require('./controllers/contentController');

const app = express ();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/content', contentController);

app.listen(3000, () => {
    console.log('Servidor porta 3000');
})
