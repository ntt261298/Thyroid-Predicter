const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Train = require('./models/training');

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// DB Config
const db = require('./config/key.js').mongoURL;
//Connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));
// index page
app.get('/', function(req, res) {
    res.render('index', {prediction: "", file: '', msg: ''});
});

app.get('/expert', function(req, res) {
  res.render('expert', {message: ''})
})

app.post('/expert', function(req, res) {
  console.log(req.body);
  const newTrain = new Train({
    age: req.body.age,
    sex_0: req.body.sex_0,
    sex_1: req.body.sex_1,
    on_thyroxine_0: req.body.on_thyroxine_0,
    on_thyroxine_1: req.body.on_thyroxine_1,
    query_thyroxine_0: req.body.query_thyroxine_0,
    query_thyroxine_1: req.body.query_thyroxine_1,
    on_antithyroid_meds_0: req.body.on_antithyroid_meds_0,
    on_antithyroid_meds_1: req.body.on_antithyroid_meds_1,
    sick_0: req.body.sick_0,
    sick_1: req.body.sick_1,
    pregnant_0: req.body.pregnant_0,
    pregnant_1: req.body.pregnant_1,
    thyroid_surgery_0: req.body.thyroid_surgery_0,
    thyroid_surgery_1: req.body.thyroid_surgery_1,
    T131_treat_0: req.body.T131_treat_0,
    T131_treat_1: req.body.T131_treat_1,
    query_hypothyroid_0: req.body.query_hypothyroid_0,
    query_hypothyroid_1: req.body.query_hypothyroid_1,
    query_hyperthyroid_0: req.body.query_hyperthyroid_0,
    query_hyperthyroid_1: req.body.query_hyperthyroid_1,
    lithium_0: req.body.lithium_0,
    lithium_1: req.body.lithium_1,
    goitre_0: req.body.goitre_0,
    goitre_1: req.body.goitre_1,
    tumor_0: req.body.tumor_0,
    tumor_1: req.body.tumor_1,
    hypoituitary_0: req.body.hypoituitary_0,
    hypoituitary_1: req.body.hypoituitary_1,
    psych_0: req.body.psych_0,
    psych_1: req.body.psych_1,
    TSH: req.body.TSH,
    T3: req.body.T3,
    TT4: req.body.TT4,
    T4U: req.body.T4U,
    FTI: req.body.FTI,
  });
  newTrain.save()
    .then(() => res.send({message: 'Successfull'}))
})





app.listen(8080, () => console.log("Server running on port 8080"));
