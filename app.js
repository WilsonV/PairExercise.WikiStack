const { db,Page,User } = require('./models');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'));
app.use(express.static(__dirname + './public'));


app.get('/',(req,res) => {
    res.send('Hello World!')
})


async function init(){

    try{
    
    await db.sync()
    // await Page.sync();
    // await User.sync();
    
    app.listen(8080,() => {
        console.log('listening on port 8080'); 
    })   

    }catch(err){
        console.log(err);
    }
}


init();

// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })