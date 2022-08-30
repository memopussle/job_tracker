const filterByCategory = (jobs, filterBy) => {
  if (filterBy === "all") {
    return jobs;
  }
  return jobs.filter((job) => job.status === filterBy);
};

export default filterByCategory;
