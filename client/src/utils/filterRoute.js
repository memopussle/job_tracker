const filterRoute = (pathname, filterJobs) => {
    let filteredJobs;
if (pathname === "/") {
    return filteredJobs = filterJobs;
  } else if (pathname === "/scheduled") {
    return filteredJobs = filterJobs.filter((job) => job.status === "scheduled");
  } else if (pathname === "/active") {
   return  filteredJobs = filterJobs.filter((job) => job.status === "active");
  } else if (pathname === "/invoicing") {
    return filteredJobs = filterJobs.filter((job) => job.status === "invoicing");
  } else if (pathname === "/topriced") {
    return filteredJobs = filterJobs.filter((job) => job.status === "toPriced");
  } else if (pathname === "/completed") { 
     return filteredJobs = filterJobs.filter((job) => job.status === "completed");
  }
}

export default filterRoute;