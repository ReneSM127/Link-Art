const express = require("express");
const path = require("path");
const morgan = require("morgan");

//inicialización
const app = express();

//Configs
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./routes/entries.routes.js'))

//404
app.use((req, res) => {
    res.status(404).render('404');

});

//iniciar app
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'))
})