# E-commerce API

Development with Node.js v18.15.0
<br>

## Brief description

I built a __Node-Express__ server with different endpoints to consume the store API services.
Implemented a __RESTful API__ architecture to handle CRUD requests. Functionality to use query parameters to filter products in GET requests.

Added data persistence with __MongoDB and Mongoose__. Created cloud controllers for product image data persistence in __Cloudinary__. Configured user authentication endpoints with __JWT__ to allow user login and registration. Enforced __security measures__ such as API rate limiting, CORS, query validators, etc.
Used __Postman__ to test requests.

Deployed to production in Render.
<br><br>


## URL and Endpoints
The [__API Server__][0] is already up.
<br><br>


### The endpoints currently available are:
1. `api/v1/auth` to get user authentication and access into products.
2. `api/v1/products` to get a list of products.
3. `api/v1/covers` to get a list of covers.
___
NOTE: to use POST, PATCH, DELETE request you need an API key.
___
<br>


## Usage

### Get user authentication
1. Go to the `URL` + `api/v1/auth` endpoint.
2. Add `/register` route to register as a new user or add `\login` route to get user authentication and access in products endpoint.
<br>


### Go to an endpoint
* Go to the `URL` + `api/v1/products` endpoint.<br>
* Go to the `URL` + `api/v1/covers` endpoint.<br>


#### Query properties
You can add one of the following properties to get the differents results:

##### Covers
Properties: `brand, category, sort, fields, numFilter`.<br>
Example: `URL` + `api/v1/covers` + `?` + `category`.<br><br>

##### Products
Properties: `brand, category, sort, fields, numFilter, page, limit`.<br>
Example `URL` + `api/v1/product` + `?` + `brand`.<br><br>

#### Query parameters

##### Covers
* Add `/coverID` to get a specific cover.<br>

##### Products
* Add `/productID` to get a specific product.
* Add `/:category/:distinct` to get an array of unique values according to the category, for example: `/shoes/brand`.
* Add `/categories` to get a unique list of categories.
* Add `/:productID/image` to get a image object of a specific product.<br><br>


## How to do a query?
You can use the query parameter `?` to chain a query property in a link.
* Example:  `.../api/v1/products` + `?` + `<property>`<br><br>


## How to chain more than one query?
You can use the ampersand parameter `&` to chain multiple queries
* Example:  `.../api/v1/products` + `?` + `<property>` + `&` + `<property>`  ----> `.../api/v1/products?name=^a&brand=x`<br><br>


## Properties description
1. __name:__ accepts a regex value, example to use it: `?name=^a` 
2. __brand:__  only accepts brands values, example to use it: `?brand=nike`
3. __category:__ only accepts category values, example to use it: `?category=shoes`
4. __description:__ accepts regex value to match description content, example to use it: `?description=jogger`
5. __sort:__ Use it to sort the products acording to a property, example to use it: `?sort=price`
6. __fields:__ Use it to get the products acording to a properties selected, example to use it: `?fields=price,name`
7. __numFilter:__ Use it to filter the products according to price or rating, example to use it: `?numFilter=price>100,rating=4,discount=15`
8. __page:__ Use it to get a page according to the default limit of products, example to use it: `?page=2`
9. __limit:__ Use it to set the limit of products that can shows, example to use it: `?page=2`
<br><br>


## Attribution
I applied some tricks learned from [NodeJS & Express][1] Course developed by John Smilga!

[0]: "https://e-commerce-store-api.onrender.com/"
[1]: https://www.youtube.com/watch?v=qwfE7fSVaZM
