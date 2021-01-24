const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

 const StaticPath = path.join(__dirname , '../public');
 const templates_Path = path.join(__dirname , '../templates/views');
 const partials_Path = path.join(__dirname , '../templates/partials');




app.set('view engine' ,'hbs');
app.set('views', templates_Path);
hbs.registerPartials(partials_Path);

app.use(express.static(StaticPath));

app.get('/', (req,res)=>{
   res.render("index")
})

app.get('/about', (req,res)=>{
    res.render('about')
 })
 app.get('/weather', (req,res)=>{
    res.render('weather')
 })
 
app.get('*', (req,res)=>{
    res.render('404error',{
        errorMsg: 'Opps! Page Not Found'
    })

})

app.listen(port , ()=>{
    console.log(`Running on localhost ${port}`)
});