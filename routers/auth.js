const express = require("express");
const { User, errorTest } = require("../controller/User");
const router = express.Router();

router.post("/user", User); //POST
router.get("/error", errorTest); //GET

module.exports = router;
