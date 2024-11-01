const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  email: String,
  faculties: String,
});

const UniversityModel = mongoose.model(
  "University",
  universitySchema,
  "university"
);
