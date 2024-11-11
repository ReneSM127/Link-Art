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
    const query1 = 'SELECT nombreUsuario, correo FROM usuarios LIMIT 9';
    const query2 = 'SELECT * FROM usuarios WHERE FIND_IN_SET("pintor", categoria) > 0 LIMIT 9';

    // Ejecutar la primera consulta
    connection.query(query1, (err, results1) => {
        if (err) {
            console.error('Error en la consulta 1:', err);
            return res.status(500).send('Error al obtener datos');
        }

        if (results1.length === 0) {
            return res.status(404).send('No se encontraron resultados para la consulta 1');
        }

        // Ejecutar la segunda consulta después de que la primera haya finalizado
        connection.query(query2, (err, results2) => {
            if (err) {
                console.error('Error en la consulta 2:', err);
                return res.status(500).send('Error al obtener datos');
            }

            // Pasa los datos necesarios, incluyendo ambos resultados
            res.render('artist', {
                currentPage: 'artist',
                dato: results1,   // Resultados de la primera consulta
                pintores: results2 // Resultados de la segunda consulta
            });
        });
    });
};

const renderObras = (req, res) => {
    res.render('obras', { currentPage: 'obras' });
};

const renderNewEntry = (req, res) => {};


const renderRegister = (req, res) => {
    res.render('register');
};

const renderProfile = (req, res) => {
    const query = "SELECT * FROM usuarios WHERE nombreUsuario = ?";
    const username = req.params.nombreUsuario; // Extrae el nombre de usuario de la URL

    connection.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error al extraer los datos:', err);
            return res.status(500).send('Error al extraer los datos de la base de datos.');
        }

        if (results.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }

        // Renderiza la vista y pasa los datos del usuario y la variable currentPage
        res.render('profile', { currentPage: 'profile', user: results[0] });
    });
};

module.exports = {
    renderIndex,
    renderNewEntry,
    renderLogin,
    renderComprar,
    renderArtistas,
    renderObras,
    renderRegister,
    renderProfile
};
