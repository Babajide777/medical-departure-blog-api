import { Router } from "express";
import {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
  getAllPosts,
  getBlogPost,
} from "../controllers/postControllers";
import verifyToken from "../middlewares/authMiddleware";
const router = Router();

router.post("/add", verifyToken, addBlogPost);
router.get("/get/:id", getBlogPost);
router.put("/edit/:id", verifyToken, editBlogPost);
router.delete("/delete/:id", verifyToken, deleteBlogPost);
router.get("/all", getAllPosts);

export default router;
