const express = require('express');
const connectDB= require('./config/db')
//initialize express in a variable called app
const app = express();

//Connect Database
connectDB();

// Init Middleware to use server into users.js
//this accept data
app.use(express.json({extended:false}));

app.get('/', (req, res) => res.json({msg:'Hello World'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

//start with:npm run server
app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));