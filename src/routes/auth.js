const { Router } = require("express");
const router = Router();

const {
    createUser
} = require("../controllers/auth.js")

router.post("/auth", createUser);

module.exports = router;