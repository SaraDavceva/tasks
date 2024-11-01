const {
  get,
  create,
  remove,
  update,
  getSingle,
} = require("../pkg/faculty/index");
const getFaculty = async (req, res) => {
  try {
    const data = await get(req.auth.id);
    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createFaculty = async (req, res) => {
  try {
    const data = {
      ...req.body,
      user_id: req.auth.id,
    };

    const newPost = await create(data);

    return res.status(200).send(newPost);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateFaculty = async (req, res) => {
  try {
    const data = {
      ...req.body,
      faculty_id: req.auth.id,
    };

    const check = await getSingle(req.params.id);

    if (!check) {
      return res.status(400).send("error");
    }

    if (check.faculty_id.toString() !== req.auth.id.toString()) {
      return res.status(400).send("error");
    }

    const updated = await update(req.params.id, data);

    return res.status(200).send(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeFaculty = async (req, res) => {
  try {
    const check = await getSingle(req.params.id);

    if (!check) {
      return res.status(400).send("FAculty not found!");
    }

    if (check.faculty_id.toString() !== req.auth.id.toString()) {
      return res.status(400).send("error");
    }

    const removedFaculty = await remove(req.params.id);
    return res.status(200).send(removedFaculty);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getFaculty,
  createFaculty,
  updateFaculty,
  removeFaculty,
};
