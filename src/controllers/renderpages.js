const connection = require("../db")
const bcrypt = require("bcryptjs");
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

const renderObras = (req, res) => {
    res.render('obras', { currentPage: 'obras' });
};

const renderProfile = (req, res) => {
    res.render('profile', { currentPage: 'profile' });
};

const renderFile = (req, res) => {
    res.render("file")
};

const renderIMG = (req, res) => {
    //aqui consulta la url para cargarla
    const sql = "SELECT foto FROM usuarios where id=1";
    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results[0])
        res.render('verIMG', { imagenes: results[0].foto });
    });
};




const renderRegister = (req, res) => {
    res.render('register');
};


module.exports = {
    renderIndex,
    renderFile,
    renderLogin,
    renderComprar,
    renderArtistas,
    renderObras,
    renderRegister,
    renderProfile,
    renderIMG
};
