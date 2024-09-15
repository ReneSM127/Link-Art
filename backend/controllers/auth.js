import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //q (query o consulta) Es la sentencia de Mysql que queremos ejecutar
  //El ? es un indicador de posición

  const q = "SELECT * FROM Users WHERE username = ?";

  //q es la sentencia a ejecutar
  //req.body.username se reemplaza en ? y se ejecuta la sentencia
  //La función dentro es que pasa cuando se ejecuta

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err); //Si existe algun error, devuelve el tipo de error ocurrido

    //En la consulta se muestra todos los usuarios con ese Username, Si el usuario ya existe entonces la sentencia lo mostrara
    //y data.length será 1 que en JavaScript 1 = True

    if (data.length) return res.status(409).json("User already exist");

    //Crear nuevo usuario

    // Encriptación de contraseña
    const salt = bcrypt.genSaltSync(10); //Usa el algoritmo hash 10 veces
    const hashedPassword = bcrypt.hashSync(req.body.password, salt); //Encripta la contraseña del formulario 10 veces

    const q =
      "INSERT INTO Users (`username`,`email`, `passsword`, `phone`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.phone,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err); //Si ocurre un error se muestra aquí

      return res.status(200).json("User created"); //Se crea el usuario
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM Users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err); //Aquí si ocurre un error cualquiera se enviará esto

    //Este error ocurre cuando no encuentra el usuario
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      //verifica que ambas contraseñas sean iguales
      req.body.password, //contraseña que recibe
      data[0].passsword //Contraseña de la bd
    );

    if (!checkPassword) return res.status(400).json("Wrong password or user");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { passsword, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logout");
};
