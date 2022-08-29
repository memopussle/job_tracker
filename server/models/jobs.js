import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  client: String,
  job_description: String,
  title: String,
  phone_number: String,
  address: String,
  email: String,
  status: String,
  created: {
    type: Date,
    default: new Date(),
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
