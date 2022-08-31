import express from "express";
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from "../controllers/jobs.js";

const router = express.Router();
router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
