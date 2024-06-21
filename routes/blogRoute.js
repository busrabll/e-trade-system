const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, isLiked, likeBlog, dislikeBlog, uploadImages } = require("../controller/blogCtrl");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadimages");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 2),
    blogImgResize,
    uploadImages
);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);

router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;