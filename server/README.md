# node-mongo-store-api

Node.js v18.12.1



## URL and Endpoints

The server is already up in `https://e-commerce-store-api.onrender.com/`

### The endpoints currently available are:
1. `api/v1/auth` to get user authentication and access into products.
2. `api/v1/products` to get a list of products.

## How to use?

### Get user authentication

1. Go to the `URL` + `api/v1/auth` endpoint.
2. Add `/register` route to register as a new user or add `\login` route to get user authentication and access in products endpoint.

___
NOTE: For now you can get authentication only from an API testing as Postman.
___

### Go to products endpoint

0. Go to the `URL` + `api/v1/products` endpoint.
1. You can add the nexts queries properties to get the query results: `brand, category, sort, fields, numFilter, page, limit`
2. Add `/productID` to get a specific product.
3. Add `/brands` to get a unique list of brands.
4. Add `/categories` to get a unique list of categories.
5. Add `/productID/image` to get a image object of a specific product.

## How to do a query?

You can use the query parameter `?` to chain a query property in a link.
* Example:  `.../api/v1/products` + `?` + `<property>`



## How to chain more than one query?

You can use the ampersand parameter `&` to chain multiple queries
* Example:  `.../api/v1/products` + `?` + `<property>` + `&` + `<property>`  ----> `.../api/v1/products?name=^a&brand=x`



## Properties description

1. __name:__ accepts a regex value, example to use it: `?name=^a` 
2. __brand:__  only accepts brands values, example to use it: `?brand=sony`
3. __category:__ only accepts category values, example to use it: `?category=electronics`
4. __description:__ only accepts category values, example to use it: `?description=jogger`
5. __sort:__ Use it to sort the products acording to a property, example to use it: `?sort=price`
6. __fields:__ Use it to get the products acording to a properties selected, example to use it: `?fields=price,name`
7. __numFilter:__ Use it to filter the products according to price or rating, example to use it: `?numFilter=price>100,rating=4`
8. __page:__ Use it to get a page according to the default limit of products, example to use it: `?page=2`
9. __limit:__ Use it to set the limit of products that can shows, example to use it: `?page=2`


## Attribution
I applied some of the knowledge from [NodeJS & Express][1] Course developed by John Smilga!

[1]: https://www.youtube.com/watch?v=qwfE7fSVaZM
