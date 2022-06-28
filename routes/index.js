var express = require('express');
var router = express.Router();

// Importamos nuestra api
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  // Llamamos a la función getBooks que está dentro de api
  const libros = await api.getBooks();
  // console.log(libros);

  // Si soy un servicio como Open weather map entonces siempre devuelto JSON usando res.send(resultado)
  // angular
  // res.send(libros);

  // monorepo Vs monolito
  // monorepo (un solo repositorio) fronter/backen. 
  // monolito (malo): cuando un monorepo sale mal, se convierte en un monolito. Un repo que hace 55 cosas distintas.
  res.render('index', { title: 'Ron Weasley', libros });
});

router.get('/libro/:id', async (req, res) => {
  // params

  // Le enviamos como parámetro el ID del libro que quiere ver el usuario
  const libro = await api.getBookById(req.params.id);
  // console.log(libro);

  // res.send(`Estás viendo el libro ${req.params.id}`);
  res.render('pages/libro', {libro});
});

// Crear una ruta de /autores
// Mostrar el listado en JSON de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();

  res.send(autores);
});

/* GET agregar */
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});

/*
  GET
    req.params: (/:id)
    req.query: (?termino=sarasa)
  POST
    req.body
*/

/* POST agregar-libro */
router.post('/agregar-libro', (req, res) => {
  // Conseguir lo que el usuario tipeó
  // Para levantar algo por método post tengo que usar
  // req.body
  console.log(req.body);

  let {titulo, autor, precio} = req.body;

  res.send(`Agregaron ${titulo} ${autor} ${precio}`);
  // res.render('pages/agregar');
});

/* GET nosotros page */
router.get('/buscar', async (req, res) => {
  

  // query
  // Guardar en una variable lo que escribió el usuario en el campo
 let { termino } = req.query;
 // let termino = req.query.termino;
 console.log(termino);
  // Magia de conexión a DB SELECT
  // Mostrarlo en la terminal
  //res.send('Estas en buscar');
  const resultados = await api.findBookByTitle(termino);
  res.send(resultados);
  
});

/* GET nosotros page */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros')
});

/* GET contacto page */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto')
});

module.exports = router;
