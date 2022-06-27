// Traemos la DB.
const db = require('../models');

// Esta mejor visto. Es una funcion exportada como una constante.
// Queremos hacer SELECT * FROM Libros
//se pone async para indicarle que los vamos ausar con aync away
//include conecta la tabla del autor. JOIN .... autor
const getBooks = async () => {
    const libros = await db.libro.findAll({include: db.autor}).then(results => {
        // Lo primero es lo que pasa en la base de datos, y lo otro devuelve los resultas en nodejs
        //include hay que tener necesidad de ponerlo por alguna razon, porque va a sumar en el js, y va a afectar el performance

        return results;

    });

    return libros;

}

const getAuthors = async () => {
    const authors = await db.autor.findAll()
                    .then(results => {
                        return results;
                    });

    return authors;
}

module.exports = {
    getBooks,
    getAuthors
}
