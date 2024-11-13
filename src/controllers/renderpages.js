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
    const query1 = 'SELECT nombreUsuario, correo, foto FROM usuarios LIMIT 9';
    const query2 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("pintor", categoria) > 0 LIMIT 25';
    const query3 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("musico", categoria) > 0 LIMIT 25';
    const query4 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("escultor", categoria) > 0 LIMIT 25';
    const query5 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("actor", categoria) > 0 LIMIT 25';
    const query6 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("fotografo", categoria) > 0 LIMIT 25';
    const query7 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("artesano", categoria) > 0 LIMIT 25';
    const query8 = 'SELECT nombreUsuario, correo, foto FROM usuarios WHERE FIND_IN_SET("otro", categoria) > 0 LIMIT 25';
    
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

            connection.query(query3, (err, results3) => {
                if (err) {
                    console.error('Error en la consulta 3:', err);
                    return res.status(500).send('Error al obtener datos');
                }

                connection.query(query4, (err, results4) => {
                    if (err) {
                        console.error('Error en la consulta 4:', err);
                        return res.status(500).send('Error al obtener datos');
                    }

                    connection.query(query5, (err, results5) => {
                        if (err) {
                            console.error('Error en la consulta 5:', err);
                            return res.status(500).send('Error al obtener datos');
                        }

                        connection.query(query6, (err, results6) => {
                            if (err) {
                                console.error('Error en la consulta 6:', err);
                                return res.status(500).send('Error al obtener datos');
                            }

                            connection.query(query7, (err, results7) => {
                                if (err) {
                                    console.error('Error en la consulta 7:', err);
                                    return res.status(500).send('Error al obtener datos');
                                }

                                connection.query(query8, (err, results8) => {
                                    if (err) {
                                        console.error('Error en la consulta 8:', err);
                                        return res.status(500).send('Error al obtener datos');
                                    }

                                    // Pasa los datos necesarios, incluyendo ambos resultados
                                    res.render('artist', {
                                        currentPage: 'artist',
                                        dato: results1,   // Resultados de la primera consulta
                                        pintores: results2, // Resultados de la segunda consulta
                                        musicos: results3, // Resultados de la tercera consulta
                                        escultores: results4, // Resultados de la cuarta consulta
                                        actores: results5, // Resultados de la quinta consulta
                                        fotografos: results6, // Resultados de la sexta consulta
                                        artesanos: results7, // Resultados de la septima consulta
                                        otros: results8 // Resultados de la octaba consulta
                                    });
                                });
                            });
                        });    
                    });
                });
            });
        });
    });
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
