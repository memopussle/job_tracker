import express from "express";
import { createJob, getJobs, updateJob } from "../controllers/jobs.js";

const router = express.Router();
router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob)

export default router;