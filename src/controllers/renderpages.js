const connection = require("../db");
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
  res.render("index", { currentPage: "index", username: req.session.username });
};

const renderLogin = (req, res) => {
  res.render("login", { currentPage: "login", username: req.session.username });
};

const renderComprar = (req, res) => {
  res.render("comprar", {
    currentPage: "comprar",
    username: req.session.username,
  });
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
            otros: results[7],      // Resultados de la octava consulta
            username: req.session.username
        });
    } catch (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).send('Error al obtener datos');
    }
};

const renderAllArtists = (req, res) => {
  const query = "SELECT * FROM usuarios"; // Ajusta la consulta según tu base de datos

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los artistas:", err);
      return res.status(500).send("Error al obtener los datos");
    }

    res.render("allArtists", {
      currentPage: "allArtists",
      artists: results,
      username: req.session.username,
    });
  });
};

const renderObras = (req, res) => {
  res.render("obras", { currentPage: "obras", username: req.session.username });
};

const renderFile = (req, res) => {
  res.render("file");
};

const renderIMG = (req, res) => {
  //aqui consulta la url para cargarla
  const sql = "SELECT foto FROM usuarios where id=1";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results[0]);
    res.render("verIMG", { imagenes: results[0].foto });
  });
};

const renderRegister = (req, res) => {
  res.render("register");
};

const renderProfile = (req, res) => {
  const queryUser = "SELECT * FROM usuarios WHERE nombreUsuario = ?";
  const queryPosts = "SELECT * FROM Usuarios_Publicaciones WHERE nombreUsuario = ?";
  const username = req.params.nombreUsuario; // Extrae el nombre de usuario de la URL

  // Consulta para obtener los datos del usuario
  connection.query(queryUser, [username], (err, userResults) => {
    if (err) {
      console.error("Error al extraer los datos del usuario:", err);
      return res.status(500).send("Error al extraer los datos de la base de datos.");
    }

    if (userResults.length === 0) {
      return res.status(404).send("Usuario no encontrado");
    }

    // Consulta para obtener las publicaciones del usuario
    connection.query(queryPosts, [username], (err, postResults) => {
      if (err) {
        console.error("Error al extraer las publicaciones:", err);
        return res.status(500).send("Error al extraer las publicaciones de la base de datos.");
      }

      // Renderiza la vista y pasa los datos del usuario y las publicaciones
      res.render("profile", {
        currentPage: "profile",
        user: userResults[0], // Datos del usuario
        posts: postResults,  // Publicaciones del usuario
        username: req.session.username, // Nombre de usuario de la sesión actual
      });
    });
  });
};

const renderProfileEdit = (req, res) => {
  if (req.session.userId) {
    const queryUser = "SELECT * FROM usuarios WHERE nombreUsuario = ?";
    const queryPosts = "SELECT * FROM Usuarios_Publicaciones WHERE nombreUsuario = ?";
    const username = req.session.username; // Extrae el nombre de usuario de la sesión actual

    // Consulta para obtener los datos del usuario
    connection.query(queryUser, [username], (err, userResults) => {
      if (err) {
        console.error("Error al extraer los datos del usuario:", err);
        return res.status(500).send("Error al extraer los datos de la base de datos.");
      }

      if (userResults.length === 0) {
        return res.status(404).send("Usuario no encontrado");
      }

      // Consulta para obtener las publicaciones del usuario
      connection.query(queryPosts, [username], (err, postResults) => {
        if (err) {
          console.error("Error al extraer las publicaciones:", err);
          return res.status(500).send("Error al extraer las publicaciones de la base de datos.");
        }

        // Renderiza la vista y pasa los datos del usuario y las publicaciones
        res.render("profileEdit", {
          currentPage: "profile",   // Página actual
          user: userResults[0],     // Datos del usuario
          posts: postResults,       // Publicaciones del usuario
          username: req.session.username, // Nombre de usuario de la sesión actual
        });
      });
    });
  } else {
    res.redirect("/login");
  }
};

const renderVender = (req, res) => {
  res.render("vender", { currentPage: "vender", username: req.session.username });
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
  renderAllArtists,
  renderProfileEdit,
  renderVender
};
