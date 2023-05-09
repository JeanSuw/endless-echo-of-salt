const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought, 
} = ("../../controllers/thoughtControllers");

// /api/thought
router.route("/").get(getThought).post(createThought);

// /api/thought/:id
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
