const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.json('Hello world from the server!!');
});

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});