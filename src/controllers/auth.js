const connection = require("../db");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE nombreUsuario = ?"; //Verifica si existe el usuario
  connection.query(q, [req.body.username], (err, data) => {
    if (err) {
      console.error("Error insertando datos:", err);
      return res
        .status(500)
        .send("Error al insertar los datos en la base de datos.");
    }

    if (data.length) return res.status(409).send("User already exist");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO usuarios (correo, nombreUsuario, nombre, apellidos, contrasena) VALUES (?)";

    const VALUES = [
      req.body.email,
      req.body.username,
      req.body.nombre,
      req.body.apellido,
      hashedPassword,
    ];
    connection.query(query, [VALUES], (err, result) => {
      if (err) {
        console.error("Error insertando datos:", err);
        return res
          .status(500)
          .send("Error al insertar los datos en la base de datos.");
      }

      // Redirigir o mostrar un mensaje de éxito
      res.redirect("/");
    });
  });

  const correo = req.body.email;
  const query = "INSERT INTO usuarios(correo) VALUES (?)";
};

const login = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE nombreUsuario = ?";
  connection.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("user not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].contrasena
    );

    if (!checkPassword)
      return res.status(404).json("wrong password or username");

    req.session.userId = data[0].id; // Guarda el ID del usuario en la sesión
    req.session.username = data[0].nombreUsuario; // Guarda el nombre de usuario en la sesión
    res.redirect("/");
  });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("No se pudo cerrar la sesión");
    }
    res.redirect("/"); // Redirige al usuario después de cerrar sesión
  });
};

module.exports = {
  createUser,
  login,
  logout
};
