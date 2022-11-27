const express = require('express')
const app = express();

app.get('/', (req, res ) => {
    res.sendFile('./index.html', {root: __dirname})
});

app.get('/about-us', (req,res) => {
    res.sendFile('./about-us.html', {root: __dirname})
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );