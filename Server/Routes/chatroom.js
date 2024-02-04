const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandlers");
const { createChatroom } = require("../Controllers/chatroomController");
const  auth  = require("../middlewares/auth");


router.post("/", auth, catchErrors(createChatroom));


module.exports = router;
