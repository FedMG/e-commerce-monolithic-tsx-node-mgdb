const operatorMap = {
  ">": "$gt",
  ">=": "$gte",
  "=": "$eq",
  "<": "$lt",
  "<=": "$lte",
};


export const numericFilter = (queryConfig, number) => {
  const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  const options = ["price", "rating"];
  let filters = number.replace(regEx, (match) => `-${operatorMap[match]}-`);

  filters = filters.split(",").forEach((item) => {
    const [field, operator, value] = item.split("-");

    if (options.includes(field)) {
      queryConfig[field] = { [operator]: Number(value) };
    }
  });
  
  return queryConfig;
};
