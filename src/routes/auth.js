const { Router } = require("express");
const router = Router();

const {
    createUser,
    login,
    logout
} = require("../controllers/auth.js")

router.post("/auth", createUser);

router.post("/log", login);

router.get("/logout", logout)

module.exports = router;