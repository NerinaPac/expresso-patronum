// Traemos la DB
const db = require('../models');

// Esta mejor visto. Es una funcion exportada como una constante.
// Queremos hacer SELECT * FROM Libros
//se pone async para indicarle que los vamos ausar con aync away
//include conecta la tabla del autor. JOIN .... autor
const getBooks = async () => {
    
    const libros = await db.libro.findAll({
                            include: db.autor
                        })
                        .then(results => {
                            return results;
                        });

    return libros;
}

 // Lo primero es lo que pasa en la base de datos, y lo otro devuelve los resultas en nodejs
 //include hay que tener necesidad de ponerlo por alguna razon, porque va a sumar en el js, y va a afectar el performance

const getAuthors = async () => {
    const authors = await db.autor.findAll()
                    .then(results => {
                        return results;
                    });

    return authors;
}

const getBookById = async (id) => {
    // console.log('Recibiste', id);
    // Find by primary key / buscar por ID
    const book = await db.libro.findByPk(id, {include: db.autor})
                    .then(result => {
                        return result;
                    });

    return book;
};

module.exports = {
    getBooks,
    getAuthors,
    getBookById
}
