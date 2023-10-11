const express = require('express');
const users = require('./users.json');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.get('/', (req, res) => {
    res.send('welcome to your new server')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.listen(port, () => {
    console.log(`super you server is rummimg and port is ${port}`);
})