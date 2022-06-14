const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('', (request, response)=> {
    response.render('index-main.html');
});

app.get('/level', (request, response)=> {
    response.render('index-level.html');
});

app.get('/easy', (request, response)=> {
    response.render('index-easy.html');
});

app.get('/normal', (request, response)=> {
    response.render('index-normal.html');
});

app.get('/hard', (request, response)=> {
    response.render('index-hard.html');
});


app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(55555,()=>{
    console.log('서버 실행 중...');
});