import express from "express";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router();

/*
El router el responsable de decir qué debe hacer la aplicación cuando un usuario accede a una ruta específica

El controller maneja la lógica cuando se entre a esa ruta, 
como consultar la base de datos, validar datos, ejecutar operaciones y devolver respuestas al cliente
*/

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
