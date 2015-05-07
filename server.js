var express=require('express');
var app=express();
var path = require('path');

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

var server=app.listen(3000,function(){
console.log("Express is running on port 3000");
});