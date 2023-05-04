//Find all the information about each products
Query-db.productdetails.find();

//Find the product price which are between 400 to 800
Query-db.productdetails.find({product_price:{$gt:400,$lt:800}})

//Find the product price which are not between 400 to 600
Quary-db.productdetails.find({product_price:{$not:{$gte: 400, $lte: 600}}})

//List the four product which are grater than 500 in price 
Quary-db.productdetails.find({product_price:{$gt:500}}).limit(4);

//Find the product name and product material of each products
Quary-db.productdetails.find({},{product_name:1,product_material:1});

//Find the product with a row id of 10
Quary-db.productdetails.find({id:"10"});

//Find only the product name and product material
Quary-db.productdetails.find({},{product_name:1,product_material:1})

//Find all products which contain the value of soft in product material 
Quary-db.productdetails.find({product_material: /soft/i});

//Find products which contain product color indigo  and product price 492.00
Quarydb.productdetails.find({product_color: "indigo", product_price: {$gte: 492.00}});

//Delete the products which product price value are same
db.products.deleteMany( { price: { $eq: db.products.distinct("price")[0] } } )

