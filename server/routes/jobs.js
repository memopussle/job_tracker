import express from "express";
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
  getAJob,
   commentJob
} from "../controllers/jobs.js";

const router = express.Router();
router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);
router.get("/:id", getAJob);
router.post("/:id/comments", commentJob)

export default router;
