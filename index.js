const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('welcome to your new server')
})

app.listen(port, () => {
    console.log(`super you server is rummimg and port is ${port}`);
})