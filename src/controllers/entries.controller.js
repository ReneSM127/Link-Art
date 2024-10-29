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

const renderNewEntry = (req, res) => {};

const createUser = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE nombreUsuario = ?"; //Verifica si existe el usuario
    connection.query(q, [req.body.username],(err, data) =>{
        if (err){
            console.error('Error insertando datos:', err);
            return res.status(500).send('Error al insertar los datos en la base de datos.');
        }

        if (data.length) return res.status(409).send("User already exist");

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO usuarios (correo, nombreUsuario, nombre, apellidos, contrasena) VALUES (?)";

        const VALUES = [
            req.body.email,
            req.body.username,
            req.body.nombre,
            req.body.apellido,
            hashedPassword
        ];
        connection.query(query, [VALUES], (err, result) => {
            if (err) {
              console.error('Error insertando datos:', err);
              return res.status(500).send('Error al insertar los datos en la base de datos.');
            }
        
            // Redirigir o mostrar un mensaje de éxito
            res.redirect("/");
        });


    })

    const correo = req.body.email;
    const query = 'INSERT INTO usuarios(correo) VALUES (?)';
    

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
    renderObras,
    renderRegister,
    renderProfile
};
