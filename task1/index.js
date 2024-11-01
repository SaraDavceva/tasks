const express = require("express");

const connectDB = require("./pkg/db/config");
connectDB();

const app = express();

app.use(express.json());
