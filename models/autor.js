module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('autor', { // "nombre oficial de la tabla". Las llaves declaran los campos de esa tabla.
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCompleto: DataTypes.STRING(150), //nombre completo del autor
        codigoPais: DataTypes.STRING(2)
        },
        { //Configuraciones que se le hacen a la table. FreezeTablename: Friza el nombre de la tabla para que no se cambie,
            freezeTableName: true,
            timestamps: false //timestamps (sellos de tiempo) son una manera de proteger la base de datos. 
            //Hace que cuando se corre un DELETE, no se borran de verdad.
        });

    Autor.associate = (models) => {
        Autor.hasMany(models.libro); //libro seria la tabla de libros
    };
    return Autor;
 }

 //Module.exports es una manera de exportar pedacitos de JS. Java Script requiere que este exportado como un modulo. 
 // Necesita que se diga explicitamente que se puede exportar, para que en otro lugar sea inportado.