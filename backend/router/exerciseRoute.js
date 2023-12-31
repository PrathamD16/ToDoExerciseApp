const router = require("express").Router();
let Exercise = require("../models/exercise");

//Demo purpose
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get all exercises on the basis of email ID
router.route("/user/:email").get((req, res) => {
  Exercise.find({ email: req.params.email })
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add new exercises in database.
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const email = req.body.email;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    title,
    date,
    duration,
    email,
    description,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To get a single exercise
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To delete exercise by ID
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To update exercise
router.route("/update/:id").patch((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      if(req.body.title != null){
        exercise.title = req.body.title;
      }
      else{
        exercise.title = exercise.title;
      }

      if(req.body.description != null){
        exercise.description = req.body.description
      }
      else{
        exercise.description = exercise.description
      }

      if(req.body.duration != null){
        exercise.duration = Number(req.body.duration);
      }
      else{
        exercise.duration = Number(exercise.duration);
      }

      if(req.body.date != null){
        exercise.date = Date.parse(req.body.date);
      }
      else{
        exercise.date = exercise.date;
      }
      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
