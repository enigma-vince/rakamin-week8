const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user_controller")
const auth = require("../middleware/auth")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/', auth, UserController.get);
router.get('/:id', UserController.getOne);
// router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router;