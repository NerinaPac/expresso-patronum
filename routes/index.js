var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeloouuuuu!' });
});

/* GET agregar. */
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});

/* 
Manera de conseguir datos por metodo GET
Params: (/:id) 
req.query: (?termino=sarasa)

Manera de conseguir datos por metodo POST
req.body

req se ultiza siempre porque es la SOLICITUD (de informacion)

*/



/* POST agregar-libro. */
router.post('/agregar-libro', (req, res) => { /* Metodo post. Una realidad diferente al GET. Con el GET solo queremos navegar. */
 
  //Aca vamos a conseguir lo que el usuario tipeo.
  console.log(req.body); //Para levantar algo por metodo post (mostrar algo especifico en consolelog (trae un objeto)), tengo que usar req.body
  let {titulo, autor, precio} = req.body;
  res.send(`Agregaron ${titulo} ${autor} ${precio}`);
});

router.get('/buscar', (req, res)=>{
  res.send('Estas en buscar');  
  const { termino } = req.query;
  console.log(termino);
  //Magia de conexion a DB SELECT base de datos.
});

/* GET nosotros page (crear la ruta de nosotros) */
router.get('/nosotros', (req, res)=>{
  res.render('pages/nosotros')
});

router.get('/contacto', (req, res) =>{
res.render('pages/contacto')
});
module.exports = router;

/* ejercitafcio = guardar en una variable lo que escribio el usuario en el campo y tirar un consolog */


  
  
  
