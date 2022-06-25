const express = require('express');
const app = express();
const port = 80;
const path = require('path')


//Express
// 1. for serving static files
//(static module of express accesses the folder with name provided -> which contains static files)
app.use('/static', express.static('static'));


//Pug
//1. setting the template engine for pug
app.set('view engine', 'pug');

//2. setting the views directory (accessing directory via path module, and name of the folder)
app.set('views', path.join(__dirname, 'views'));



// Endpoints

//rendering pug template via name, and providing values to variables

app.get('/', (req, res) => {
    res.status(200).render('qr');
  })




//Server starting
app.listen(port, ()=>{
    console.log(`port started at port ${port}`);
})