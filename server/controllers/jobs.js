import Job from "../models/jobs.js";
import express from "express";
import mongoose from "mongoose";


const router = express.Router();

export const getJobs = async (req, res) => {
  try {
    const jobsList = await Job.find();

    res.status(200).send(jobsList); //json = send
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};