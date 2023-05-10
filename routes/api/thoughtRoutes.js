const router = require('express').Router();
const {getThought, getSingleThought, createThought,deleteThought,updateThought} = require("../../controllers/thoughtControllers");

// /api/thoughts
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
