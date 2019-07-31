const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

const museum = require('./routers/museum.route');


// Bodyparser Middleware
const cors = require('cors')

app.use(express.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Connect to Mongo
mongoose
    .connect('mongodb://baitest:minhhuy123@ds257097.mlab.com:57097/baitest'
        , {
            useNewUrlParser: true,
            useCreateIndex: true
        }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Use Routes
app.use('/api', cors(), museum);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));