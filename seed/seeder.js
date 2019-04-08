let faker = require('faker'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/easeMyCart' , { useNewUrlParser: true});

//Require Products Schema
let Products = require('../models/Products');

 for(let i=0;i<100;i++) {
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
     }).then( (product) => {
         console.log(product);
     }).catch( (error) => {
          console.log(error);
     });
 }
