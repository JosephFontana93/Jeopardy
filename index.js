const express = require('express')
const axios = require('axios');
const app = express()
const port = process.env.PORT;

app.set('view engine', 'pug');

app.set('views', './src/views')

app.get('/', async (req, res) => {

    (async () => {
        try {
            const response = await axios.get('https://jservice.io/api/random')
            //console.log(response.data);
            //questionData = JSON.parse(response.data[0]);
            //console.log(response.data);
            //console.log(response.data[0].question);
            //console.log(response.data[0].category.title);
            res.render('index', response.data[0]);
        } catch (error) {
            console.log(error.response.body);
            res.render('index');
        }
    })();
})

app.get('/fetchNew', async (req, res) => {

    (async () => {
        try {
            const response = await axios.get('https://jservice.io/api/random')
            //console.log(response.data);
            //questionData = JSON.parse(response.data[0]);
            //console.log(response.data);
            //console.log(response.data[0].question);
            //console.log(response.data[0].category.title);
            res.send(response.data[0]);
        } catch (error) {
            console.log(error.response.body);
            res.send('Error');
        }
    })();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})