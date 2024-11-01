const mongoose = require("mongoose");

const academySchema = mongoose.Schema({
  name: String,
  email: String,
});

const AademyModel = mongoose.model("Academy", academySchema, "academy");
