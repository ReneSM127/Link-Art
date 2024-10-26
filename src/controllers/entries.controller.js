const connection = require("../db")
/*
Para añadir una funcion de renderizado de por ejemplo usuarios.ejs, copiaremos las lineas cambiando el nombre
const renderUsuario = (req, res) => {
    res.render('index');
después añadimos "renderUsuario," en la parte de module.exports

};

*/

/*  añadan ,{ currentPage: 'nombrePagina' } */

const renderIndex = (req, res) => {
    res.render('index', { currentPage: 'index' });
};

const renderLogin = (req, res) => {
    res.render('login', { currentPage: 'login' });
};

const renderComprar = (req, res) => {
    res.render('comprar', { currentPage: 'comprar' });
};

const renderArtistas = (req, res) => {
    res.render('artist', { currentPage: 'artist' });
};

const renderNewEntry = (req, res) => {};

const createUser = (req, res) => {
    const correo = req.body.email;
    const query = 'INSERT INTO usuarios(correo) VALUES (?)';
    connection.query(query, correo, (err, result) => {
        if (err) {
          console.error('Error insertando datos:', err);
          return res.status(500).send('Error al insertar los datos en la base de datos.');
        }
    
        // Redirigir o mostrar un mensaje de éxito
        res.redirect("/");
    });

};

const renderRegister = (req, res) => {
    res.render('register');
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createUser,
    renderLogin,
    renderComprar,
    renderArtistas,
    renderRegister
};
