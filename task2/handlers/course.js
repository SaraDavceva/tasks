const { remove } = require("../pkg/blog");
const { getSingle } = require("../pkg/blog");
const { create, get, update } = require("../pkg/blog");

const getCourse = async (req, res) => {
  try {
    const data = await get(req.auth.id);
    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createCourse = async (req, res) => {
  try {
    const data = {
      ...req.body,
      user_id: req.auth.id,
    };

    const newCourse = await create(data);

    return res.status(200).send(newCourse);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateCourse = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    const check = await getSingle(req.params.id);

    if (!check) {
      return res.status(400).send("err");
    }

    const updated = await update(req.params.id, data);

    return res.status(200).send(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeCourse = async (req, res) => {
  try {
    const check = await getSingle(req.params.id);

    if (!check) {
      return res.status(400).send("err");
    }

    const removed = await remove(req.params.id);
    return res.status(200).send(removed);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getCourse,
  removeCourse,
  updateCourse,
  createCourse,
};
