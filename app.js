const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks')
const tweetBank = require('./tweetBank')

var port = 3000


app.use(function (req,res,next){
    console.log('Logger')
    next()
})

app.set('view engine', 'html'); 
app.engine('html', nunjucks.render); 
nunjucks.configure('views'); 
nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', tweets, function (err, output) {
    console.log(output);
});
var tweets = tweetBank.list()
// var locals = {
//     name: name,
//     content:content
// };

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.get('/', function (req,res){
//     // res.send('Root')
//     res.render( 'index', {title: locals.title, people: locals.people, prueba : 'UN STRING'} );
// })

app.get('/', function (req,res){
    console.log(tweets)
    res.render( 'index', {
        title : 'Tweets',
        tweets: tweets,
        // , content: tweets[0].content
    } );

})

    
app.get('/user', function (req,res){
    res.send('Root/Usuarios')
})

app.get('/user/:id', function(req,res) {
    var id = req.params.id
    res.json(user[id])
})

app.listen(port,function(){
    console.log('Listening on port ${port}!')
})





