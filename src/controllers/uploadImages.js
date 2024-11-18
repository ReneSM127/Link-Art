const connection = require("../db");
const multer = require("multer");
const path = require("path");

/*
Multer guarda los archivos dentro del servidor de node, en la carpeta de public/uploads
esto hará que el proyecto pese más así que cuidado, de momento lo calamos a ver que tan pesado se vuelve con las imagenes
para mandarlo al server
*/

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Nombre único para cada archivo
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limita a 5MB
});
const pathname = (req, res) => {
  //aqui se inserta la dirección para buscar la imagen
  //const imagePath = `uploads/${req.file.filename}`;
  const q = "INSERT INTO publicaciones (idUsuarios, fecha, imagen) VALUES (?)"; //<- CUIDADO, de momento solo actualiza el id 1, en el futuro buscara el id del usuario logeado
  const VALUES = [
    userId = req.session.userId,
    fecha = new Date().toISOString().slice(0, 19).replace('T', ' '),
    imagen = "/uploads/default.jpg", // Extrae el nombre de usuario de la URL
  ];
  connection.query(q, [VALUES], (err, data) => {
    if (err) return res.status(500).json(err);

    res.redirect("/profile");
  });
};
/*

*/
module.exports = {
  storage,
  upload,
  pathname,
};
