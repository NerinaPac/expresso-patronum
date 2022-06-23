module.exports = (sequelize, DataTypes) => {
    /* El nombre Libro// Autor, que seria el CONCEPTO, es buena practica hacerlo con la primera letra en Mayuscula */
    const Libro = sequelize.define('libro', { // libro nombre de la table, y seguido Que campos vamos a usar
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataTypes.STRING(200),
        precio: DataTypes.INTEGER(6),
        portada: DataTypes.STRING(200)
        
    }, {
        freeTableName: true,
        timestamps: false
    }); //Cierra la declaracion de las tablas. 


    //Para conectarlo con la tabla de autores:

    Libro.associate = (models) => { //models para que lo identifique como una tabla, ademas de que esta en la misma carpeta
        Libro.belongsTo(models.autor); //libro pertenece a un autor (de la tabla autor.)
    }



    return Libro;

}  
/* Estamos guardando una especie de funcion anonima */