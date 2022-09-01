const filterRoute = (pathname, filterJobs) => {
  let filteredJobs;
  switch (pathname) {
    case "/":
      filteredJobs = filterJobs;
      break;
    case "/scheduled":
      filteredJobs = filterJobs.filter((job) => job.status === "scheduled");
      break;
    case "/active":
      filteredJobs = filterJobs.filter((job) => job.status === "active");
      break;
    case "/invoicing":
      filteredJobs = filterJobs.filter((job) => job.status === "invoicing");
      break;
    case "/topriced":
      filteredJobs = filterJobs.filter((job) => job.status === "toPriced");
      break;
    case "/completed":
      filteredJobs = filterJobs.filter((job) => job.status === "completed");
      break;
    default :
      filteredJobs = filterJobs;
    }
    return filteredJobs;
};

export default filterRoute;
