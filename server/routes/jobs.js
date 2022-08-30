import express from "express";
import { createJob, getJobs } from "../controllers/jobs.js";

const router = express.Router();
router.get("/", getJobs);
router.post("/", createJob)

export default router;