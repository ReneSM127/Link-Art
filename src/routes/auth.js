const { Router } = require("express");
const router = Router();

const {
    createUser,
    login
} = require("../controllers/auth.js")

router.post("/auth", createUser);
router.post("/log", login);

module.exports = router;