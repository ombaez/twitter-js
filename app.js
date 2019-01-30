const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks')
var port = 3000

app.use(function (req,res,next){
    console.log('Logger')
    next()
})

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

var locals = {
    title: 'TWITTER',
    people: [
        { name: 'Persona1'},
        { name: 'Persona2' },
        { name: 'Persona3'}
    ]
};

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/', function (req,res){
    // res.send('Root')
    res.render( 'index', {title: locals.title, people: locals.people, prueba : 'UN STRING'} );
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





