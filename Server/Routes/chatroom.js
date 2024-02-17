const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandlers");
const { createChatroom, getAllChatroom } = require("../Controllers/chatroomController");
const  auth  = require("../middlewares/auth");


router.post("/", auth, catchErrors(createChatroom));
router.get("/", auth, catchErrors(getAllChatroom));


module.exports = router;
