const mysql = require("mysql2");

// Crear conexión a la base de datos
const connection = mysql.createConnection({
  host: "bd-link-art.mysql.database.azure.com", // Cambia por tu host (puede ser una IP o 'localhost')
  user: "administrador", // Tu usuario de MySQL
  password: "Link-Art", // La contraseña del usuario
  database: "linkart", // El nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

module.exports = connection;
