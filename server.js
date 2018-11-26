const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
app.set('view engine', 'ejs');
app.set('views', './views');
// index page
app.get('/', function(req, res) {
    res.render('index', {prediction: ""});
});


app.listen(8080, () => console.log("Server running on port 8080"));
