var express = require('express');
var router = express.Router();

const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  // Llamamos a la funcion getBooks que esta dentro de api
  const libros = await api.getBooks();
  console.log(libros);
  //res.render('index', { title: 'Jeloouuuuu!' });
  res.send(libros);
});

// Si soy un servicio API como openweathermap, me sirve devolver un json (send(libros))
// monorepo (un solo repositorio) fronter/backen. 
// monolito (malo): cuando un monorepo sale mal, se convierte en un monolito. Un repo que hace 55 cosas distintas.
//Esto es backen. Se puede hacer la front en otro framework

//ejs es una herramieta de backer, no de fronten. Se queda muy limitada.

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


  
  
  
