const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();

const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const {
  getCourse,
  createCourse,
  updateCourse,
  removeCourse,
} = require("./handlers/course");

const app = express();

app.use(express.json());
app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);

app.post("/auth/login", login);
app.post("/auth/register", register);

app.get("/course", getCourse);
app.post("/course", createCourse);
app.put("/course/:id", updateCourse);
app.delete("/course/:id", removeCourse);

app.listen(getSection("development").port, () =>
  console.log(`Server starter at port ${getSection("development").port}`)
);
