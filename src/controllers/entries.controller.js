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
    res.render('artistas', { currentPage: 'artistas' });
};

const renderProfile = (req, res) => {
    res.render('profile', { currentPage: 'profile' });
};

const renderNewEntry = (req, res) => {};

const createNewEntry = (req, res) => {};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderLogin,
    renderComprar,
    renderArtistas,
    renderProfile
};
