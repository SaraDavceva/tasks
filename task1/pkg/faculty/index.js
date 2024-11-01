const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  faculty_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Faculty",
  },
  name: String,
  email: String,
  university: String,
});

const FacultyModel = mongoose.model("Faculty", facultySchema, "faculty");

const get = async () => {
  return await FacultyModel.find();
};
const getSingle = async (id) => {
  return await FacultyModel.findOne({ _id: id });
};

const create = async (data) => {
  const newFaculty = new FacultyModel(data);
  return await newFaculty.save();
};

const update = async (_id, data) => {
  return await FacultyModel.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await FacultyModel.deleteOne({ _id });
};

module.exports = {
  get,
  getSingle,
  create,
  update,
  remove,
};
