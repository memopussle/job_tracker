const sortByDate = (jobs, sortBy) => {
  let sortedDates;
  if (sortBy === "newest") {
    return (sortedDates = jobs
      ?.map((obj) => {
        return { ...obj, created: new Date(obj.created) };
      })
      .sort((a, b) => b.created - a.created));
  }
  return (sortedDates = jobs
    ?.map((obj) => {
      return { ...obj, created: new Date(obj.created) };
    })
    .sort((a, b) => a.created - b.created));
};

export default sortByDate;
