const express = require("express");
const { getAllBlogs, getSingleBlog, createBlog, deleteBlog, updateBlog } = require("../controllers/blogController");

const router = express.Router();

const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random());
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.post("/", upload.single("image"), createBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id", upload.single("image"), updateBlog);

module.exports = router;