import Job from "../models/jobs.js";
import express from "express";
import mongoose from "mongoose";


const router = express.Router();

// get all the jobs
export const getJobs = async (req, res) => {
  try {
    const jobsList = await Job.find();

    res.status(200).send(jobsList); //json = send
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//create a job
export const createJob = async (req, res) => {
  const {
    client,
    title,
    job_description,
    phone_number,
    address,
    created,
    email,
    status,
  } = req.body;

  const newJob = new Job({
    client,
    title,
    job_description,
    phone_number,
    address,
    created,
    email,
    status,
  });

  try {
    await newJob.save();

    res.status(201).send(newJob);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

//update a job
export const updateJob = async (req, res) => {
  const { id: _id } = req.params; // rename id -> _id

  const job = req.body;

  //if id is not valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedJob = await Job.findByIdAndUpdate(
    _id,
    { ...job, _id }, // update the post with the id
    { new: true }
  );
  res.send(updatedJob);
};

// delete a job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Job with that id");

  await Job.findByIdAndRemove(id);

  res.send({ message: "Post deleted sucessfully" });
};

// Get a single job
export const getAJob = async (req, res) => {
  const { id: _id } = req.params;


  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send({ message: "id provided is invalid" });
  }

  const JobById = await Job.findById(_id);
  if (!JobById) {
    return res.status(404).send({ message: "id not found" });
  }

  return res.status(200).send(JobById);
}