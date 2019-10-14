var express =require('express');
var mongoose =require('mongoose');
var bodyparser= require('body-parser');
var cors = require ('cors');

var app =express();
const route =require('./route/routes');
mongoose.connect('mongodb://localhost:27017/shopinglist', {
		useNewUrlParser: true
});

mongoose.connection.on('connected', ()=> {
	console.log("mongoDb connect");
});

mongoose.connection.on("error", (error)=>{
 console.log(error);
});
 const PORT= 3000;
 app.use(cors());

 app.use(bodyparser.json());
 app.use('/api', route);
 app.get('/', (req,res)=>{
 	res.send('some thing');
 })
 app.listen(PORT, () =>{
console.log('server has been started at port'+ PORT);
 });