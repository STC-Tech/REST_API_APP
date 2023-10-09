const express = require('express');
const app = express();
// const studentRoute = require('./api/routes/student.js')
// const facultyRoute = require('./api/routes/faculty.js')
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const userRoute=require('./api/routes/user');



// const { MongoClient, ServerApiVersion } = require('mongodb');
mongoose.connect('mongodb+srv://ganeshrathod0249:GuTbJkYmIsfCA0o1@tempo.2nyafdz.mongodb.net/?retryWrites=true&w=majority');

// MongoClient.connect('mongodb+srv://ganesh:Gani@123@cluster0.venx20b.mongodb.net/?retryWrites=true&w=majority', {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }
// });
// mongodb://localhost:27017
mongoose.connection.on('error', err => {
    console.log('connection fail');
});
mongoose.connection.on('connected', connected => {
    console.log('connected with database..');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use('/student', studentRoute);
app.use('/user',userRoute);
// app.use('/faculty', facultyRoute)



app.use((req, res, nest) => {
    res.status(404).json({
        error: 'bad request'
    })

})
module.exports = app;