const { Router } = require("express");
const router = Router();

const {
    createUser,
<<<<<<< HEAD
    login,
    logout
} = require("../controllers/auth.js")

router.post("/auth", createUser);

router.post("/log", login);

router.get("/logout", logout)

=======
    login
} = require("../controllers/auth.js")

router.post("/auth", createUser);
router.post("/log", login);

>>>>>>> omar
module.exports = router;