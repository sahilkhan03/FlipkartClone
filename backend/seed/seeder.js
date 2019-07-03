let faker = require('faker'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/easeMyCart' , { useNewUrlParser: true});

//Require models
let Products = require('../models/Products'),
    Comments = require('../models/Comments');


 for(let i=0; i<100; i++) {
    //Creating fake products
     Products.create({

         title: faker.commerce.productName(),
         price: faker.commerce.price(),
         discount : faker.random.number()%500,
         image: faker.image.imageUrl(),
         features : faker.lorem.sentences(),
         description : faker.lorem.paragraph(),
         ratings: faker.random.number()%5,
         brand: faker.company.companyName() ,
         category: faker.commerce.department()

     }) 
 }

