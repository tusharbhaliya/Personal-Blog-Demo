const express = require("express");
const path = require('path');
const cors = require("cors");
const blogRoutes = require("./routes/blogs");
const connectDB = require("./config/db");
require("dotenv").config();

const expressStatic = require('express').static;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', expressStatic(path.join(__dirname, 'uploads')));
app.use("/api/blogs", blogRoutes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Port ${process.env.PORT}`);
});
