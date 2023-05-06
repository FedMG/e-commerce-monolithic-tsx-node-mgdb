# E-commerce API

Development with Node.js v18.15.0<br/>

The [__API Server__][0] is already up.
<br/><br/>

## Table of Contents

- [Brief Description](#brief-description)
- [Endpoints](#endpoints)
- [Get User Authentication](#get-user-authentication)
- [Usage](#usage)
  - [1- Go to an endpoint](#1--go-to-an-endpoint)
  - [2- Add request queries or request parameters to get the differents results](#2--add-request-queries-or-request-parameters-to-get-the-differents-results)
    - [Request queries](#request-queries)
    - [Request parameters](#request-parameters)
- [How to](#how-to)
  - [How to make a request query?](#how-to-make-a-request-query)
  - [How to chain multiple request queries?](#how-to-chain-multiple-request-queries)
- [Descriptions of Query Requests and properties](#descriptions-of-query-requests-and-properties)
  - [To filter by property data type](#to-filter-by-property-data-type)
  - [Utilities](#utilities)
- [Attribution](#attribution)
<br/>

## Brief description

I built a __Node-Express__ server with different endpoints to consume the store API services.
Implemented a __RESTful API__ architecture to handle CRUD requests. Feature to use query parameters to filter products in GET requests.

Added data persistence with __MongoDB and Mongoose__. Created cloud controllers for product image data persistence in __Cloudinary__. Configured user authentication endpoints with __JWT__ to allow user login and registration. Enforced __security measures__ such as API rate limiting, CORS, query validators, etc.
Used __Postman__ to test requests.

Deployed to production on __Render__.
<br/><br/>


## Endpoints

### The endpoints currently available are:
1. `api/v1/auth` to get user authentication and access into products.
2. `api/v1/products` to get a list of products.
3. `api/v1/covers` to get a list of covers.
___
NOTE: to use POST, PATCH, DELETE request you need an API key.
___
<br/>

## Get user authentication
1. Go to the `URL` + `api/v1/auth` endpoint.
2. Add `/register` route to register as a new user or add `\login` route to get user authentication and access in products endpoint.
<br/>

## Usage

### 1- Go to an endpoint
* Go to the `URL` + `api/v1/products` endpoint.<br/>
* Go to the `URL` + `api/v1/covers` endpoint.<br/><br/>

### 2- Add request queries or request parameters to get the differents results

#### Request queries
  * __Covers__<br/>
    Queries: `brand, category, alt, sort, fields`.<br/>
    Example: `URL` + `api/v1/covers` + `?` + `brand=nike`.<br/><br/>

  * __Products__<br/>
    Queries: `text, numFilter, sort, fields, page, limit`.<br/>
    Example `URL` + `api/v1/product` + `?` + `text=brand=nike`.<br/><br/>


#### Request parameters
  * __Covers__<br/>
    * Add `/coverID` to get a specific cover.<br/>
      Example: `.../api/v1/products/coverID`.

  * __Products__<br/>
    * Add `/productID` to get a specific product.<br/>
      Example: `.../api/v1/products/productID`.
    * Add `/categories` to get a unique list of categories.<br/>
      Example: `.../api/v1/products/categories`.
    * Add `/colors` to get a unique list of colors.<br/>
      Example: `.../api/v1/products/colors`.
    * Add `/:productID/image` to get a image object of a specific product.<br/>
      Example: `.../api/v1/products/productID/image`.
    * Add `/:category/:distinct` to get an array of unique values according to the category.<br/>
      Example: `.../api/v1/products/shoes/brand`.<br/><br/>



## How to
### How to make a request query?
  * You can use the query parameter `?` to chain a query with an endpoint.<br/>
    Example:  `.../api/v1/products` + `?` + `<query>`<br/><br/>

### How to chain multiple request queries?
  * You can use the ampersand parameter `&` to chain multiple queries.<br/>
    Example 1: `.../api/v1/products` + `?` + `<query>` + `&` + `<query>`<br/>
    Example 2: `.../api/v1/products?text=name=^a&limit=5`<br/><br/>


## Descriptions of Query Requests and properties

**Products**

#### To filter by property data type
1. __text:__ Use it to filter the products according to the string properties.<br/>
   Example: `?text=name=^black jogger$,brand=zara`.
    * __name:__ accepts a regex value.<br/>
      Example: `name=^a`.
    * __brand:__  only accepts brands values.<br/>
      Example: `brand=nike`.
    * __category:__ only accepts category values.<br/>
      Example: `category=shoes`.
    * __description:__ accepts a regex value. Also, it has nested properties: `introduction`, `body`, `conclusion`.<br/>
      Example: `description.body=^Our new collection`.
   ___
   __NOTE:__ If there are multiple properties they must be spaced with commas.
   ___

2. __numFilter:__ Use it to filter the products according to the numeric properties.<br/>
   Example: `?numFilter=price>100,discount=15`.
    * __price:__<br/>
      Example: `price<=80`.
    * __stock:__<br/>
      Example: `stock>100`.
    * __discount:__<br/>
      Example: `discount=10`.
    * __rating:__ has nested properties `stars` and `votes`.<br/>
      Example: `rating.stars<=3`.
   ___
   __NOTE:__ If there are multiple properties they must be spaced with commas. You can use the following numeric operators: `>`, `<`, `<=`, `>=`, `=`.
   ___


### Utilities
3. __sort:__ Use it to sort products according to a property.<br/>
   Example: `?sort=price`.
4. __fields:__ Use it to get products according to the properties selected.<br/>
   Example: `?fields=price,name`.
5. __page:__ Use it to get a page according to the default limit of products.<br/>
   Example: `?page=2`.
6. __limit:__ Use it to set the limit of products that can be displayed.<br/>
   Example: `?limit=2`.

___
__NOTE:__ cover endpoint has almost the same features except for `alt` which accepts a regex value, and it's not necessary to use `text` request query to filter string properties like `brand` or `category`.
___

<br/>

## Attribution
I applied some basics tricks learned from [NodeJS & Express][1] Course developed by John Smilga!

[0]: https://e-commerce-store-api.onrender.com/
[1]: https://www.youtube.com/watch?v=qwfE7fSVaZM
