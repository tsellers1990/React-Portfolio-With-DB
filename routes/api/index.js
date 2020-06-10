const router = require("express").Router();
const responseRoutes = require("./response");

// response routes
router.use("/response", responseRoutes);

module.exports = router;
