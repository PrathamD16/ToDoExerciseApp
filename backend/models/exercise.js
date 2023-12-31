const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true, default: 0 },
    date: { type: Date, required: true },
  },
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
