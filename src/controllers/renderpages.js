const connection = require("../db")
const bcrypt = require("bcryptjs");
const util = require('util'); // Importar util para promisify
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

const renderArtistas = async (req, res) => {
    // Consultas SQL
    const queries = [
        'SELECT nombreUsuario, correo, foto FROM usuarios LIMIT 9',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("pintor", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("musico", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("escultor", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("actor", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("fotografo", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("artesano", categoria) > 0 LIMIT 25',
        'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("otro", categoria) > 0 LIMIT 25',
    ];

    try {
        // Convertir connection.query a promesa
        const query = util.promisify(connection.query).bind(connection);

        // Ejecutar todas las consultas en paralelo
        const results = await Promise.all(queries.map(q => query(q)));

        // Renderizar la vista con los resultados
        res.render('artist', {
            currentPage: 'artist',
            dato: results[0],      // Resultados de la primera consulta
            pintores: results[1],  // Resultados de la segunda consulta
            musicos: results[2],   // Resultados de la tercera consulta
            escultores: results[3],// Resultados de la cuarta consulta
            actores: results[4],   // Resultados de la quinta consulta
            fotografos: results[5],// Resultados de la sexta consulta
            artesanos: results[6], // Resultados de la séptima consulta
            otros: results[7]      // Resultados de la octava consulta
        });
    } catch (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).send('Error al obtener datos');
    }
};

const renderAllArtists = (req, res) => {
    const query = 'SELECT * FROM usuarios'; // Ajusta la consulta según tu base de datos

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los artistas:', err);
            return res.status(500).send('Error al obtener los datos');
        }

        res.render('allArtists', {
            currentPage: 'allArtists',
            artists: results
        });
    });
};

const renderObras = (req, res) => {
    res.render('obras', { currentPage: 'obras' });
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
    renderFile,
    renderLogin,
    renderComprar,
    renderArtistas,
    renderObras,
    renderRegister,
    renderProfile,
    renderIMG,
    renderAllArtists
};
