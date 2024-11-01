const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  academy: String,
});

const CourseModel = mongoose.model("Course", courseSchema, "course");

const get = async () => {
  return await CourseModel.find();
};

const getSingle = async (id) => {
  return await CourseModel.findOne({ _id: id });
};

const create = async (data) => {
  const newCourse = new CourseModel(data);
  return await newCourse.save();
};

const update = async (_id, data) => {
  return await CourseModel.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await CourseModel.deleteOne({ _id });
};

module.exports = {
  get,
  getSingle,
  create,
  update,
  remove,
};
