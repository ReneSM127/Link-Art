/*
Para añadir una funcion de renderizado de por ejemplo usuarios.ejs, copiaremos las lineas cambiando el nombre
const renderUsuario = (req, res) => {
    res.render('index');
después añadimos "renderUsuario," en la parte de module.exports

};

*/



const renderIndex = (req, res) => {
    res.render('index');
};

const renderLogin = (req, res) => {
    res.render('login');
};

const renderNewEntry = (req, res) => {};

const createNewEntry = (req, res) => {};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderLogin
};
