export const sortQuery = (result, sort) => {
  if (sort) {
    const values = splitAndJoin(sort);
    result = result.sort(values);
    
  } else {
    result = result.sort("createAt");
  }
  return result;
};
