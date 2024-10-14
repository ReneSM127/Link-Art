/*
Para añadir una funcion de renderizado de por ejemplo usuarios.ejs, copiaremos las lineas cambiando el nombre
const renderUsuario = (req, res) => {
    res.render('index');
después añadimos "renderUsuario," en la parte de module.exports

};

*/

<<<<<<< HEAD


const renderIndex = (req, res) => {
    res.render('index');
};

const renderLogin = (req, res) => {
    res.render('login');
};

const renderArtistas = (req,res) => {
    res.render('artistas')
}
=======
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
>>>>>>> main

const renderNewEntry = (req, res) => {};

const createNewEntry = (req, res) => {};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderLogin,
<<<<<<< HEAD
    renderArtistas
=======
    renderComprar
>>>>>>> main
};
