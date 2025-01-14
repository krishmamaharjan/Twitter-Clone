import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, deletePost, commentOnPost, likeUnlikePost, getAllPost, getLikedPosts,getfollowingPosts, getUserPosts} from '../controllers/post.controller.js';

const router = express.Router();

router.get("/likes/:id",protectRoute,getLikedPosts)
router.get("/user/:username",protectRoute,getUserPosts)
router.get("/all",protectRoute,getAllPost)
router.get("/following",protectRoute,getfollowingPosts)
router.post("/create",protectRoute,createPost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentOnPost)
router.delete("/delete/:id",protectRoute,deletePost)
export default router; 