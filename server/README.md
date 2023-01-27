# node-mongo-store-api

A project done with Node.js v18.12.1



## How to use?

0. Go to the page `...`.
1. add the `api/v1/products` path.
2. You can add the nexts queries properties to get the query results: `brand, category, sort, fields, numFilter, page, limit`



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
4. __sort:__ Use it to sort the products acording to a property, example to use it: `?sort=price`
5. __fields:__ Use it to get the products acording to a properties selected, example to use it: `?fields=price,name`
6. __numFilter:__ Use it to filter the products according to price or rating, example to use it: `?numFilter=price>100,rating=4`
7. __page:__ Use it to get a page according to the default limit of products, example to use it: `?page=2`
8. __limit:__ Use it to set the limit of products that can shows, example to use it: `?page=2`

