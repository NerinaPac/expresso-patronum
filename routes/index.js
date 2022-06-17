var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeloouuuuu!' });
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


  
  
  
