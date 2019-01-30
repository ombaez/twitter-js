const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks')
var port = 3000

app.use(Logger)

app.get('/', function (req,res){
res.send('Root')
})

app.get('/user', function (req,res){
res.send('Root/Usuarios')
})

app.get('/user/:id', Matcher)


function Logger (req,res,next)
{console.log('Logger')
next()
}

function Matcher (req,res) {
    var id = req.params.id
    res.json(user[id])
}

app.listen(port,function(){
console.log('Listening on port ${port}!')
})