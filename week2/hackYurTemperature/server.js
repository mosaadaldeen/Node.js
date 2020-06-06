const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.use(express.json());
app.engine('handlebars', exphbs({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {
    title: 'home'
}));

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    res.render('cityWeather', {
        cityWeather: cityName
    });
});

app.listen(port, () => console.log(`Example app listening at:${port}`));