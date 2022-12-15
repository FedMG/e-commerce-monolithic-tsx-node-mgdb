import { checkQueryValues } from "./validators/checkQueryValues";


export const getAllProducts = async (req, res) => {
  const { featured, name, brand, category, sort, fields, numFilter, page, limit } = req.query;
    
  const products = await checkQueryValues({
    featured,
    name,
    brand,
    category,
    sort,
    fields,
    numFilter,
    page,
    limit,
  });

  res.status(200).json({ products, numHits: products.length });
};
