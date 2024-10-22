const { Router } = require("express");
const router = Router();

/*
El enrutador sirve para cambiar entre paginas, el controlador es el encargado de la logica del cambio
Para añadir uno es sencillo, primero agregan un nuevo archivo en la carpeta de views, por ejemplo "usuario.ejs"
Luego añaden al const de aqui abajo "renderUsuario," es importante la coma y para seguir unas reglas, la pagina de views debe
ir en minuscula y el render con mayuscula la primera letra de cada palabra.

Ahora lo siguiente es poner abajo router.get("/usario", renderLogin); lo que esta entre comillas es apartir de que dirección se entra a esa pagina
por ejemplo, cuando se entre a localhost:3000/usuario nos lleva a esta pagina, cuando sea localhost:3000/ nos lleva al index
La ruta que pongamos es importante para después mediante botones o forms llamar a esa página, ya que si queremos
que al darle a un boton nos lleve a la pagina de usuario, solo pondremos href="/usuario"
eso es todo aqui en routes, lo siguiente es en la carpeta de controllers

*/

const {
  renderIndex,
  renderLogin,
  renderComprar,
  renderArtistas,
  renderNewEntry,
  createNewEntry,
  renderRegister,
} = require("../controllers/entries.controller.js");

router.get("/", renderIndex);

router.get("/login", renderLogin);

router.get("/comprar", renderComprar);

router.get("/artistas", renderArtistas);

router.get("/register", renderRegister);

router.get("/new-entry", renderNewEntry);

router.post("/new-entry", createNewEntry);

module.exports = router;
