const router = require("express").Router();
const responseController = require("../../controllers/responseController");

// Matches with "/api/response"
router.route("/")
  .get(responseController.findAll)
  .post(responseController.create);

// Matches with "/api/response/:id"
router
  .route("/:id")
  .get(responseController.findById)
  .put(responseController.update)
  .delete(responseController.remove);

module.exports = router;
