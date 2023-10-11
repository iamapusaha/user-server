const express = require('express');
const users = require('./users.json');
console.log(users);
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('welcome to your new server')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('post spi hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`super you server is rummimg and port is ${port}`);
})