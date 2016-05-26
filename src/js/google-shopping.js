var data = require('../products.json');

// Write your solutions below

/* Solution to question 1
var count = 0;


 for (var i = 0; i < data.items.length; i++){
   if(data.items[i].kind === 'shopping#product'){
     count++;
   }
 }
console.log(count);

*/


/* Solution to question 2
for(var i = 0; i < data.items.length; i++){

var productItem, inventories, title;
 productItem = data.items[i].product;
 inventories = productItem.inventories;
 title = productItem.title;

     for(var j = 0; j < inventories.length; j++){
       var avail = inventories[j].availability;
       if(avail == "backorder"){
         console.log("Title:", title);
         console.log("Details:", avail);
       }
     }
   }
*/
/* Solution to question 3
for(var i = 0; i < data.items.length; i++){

var productItem, inventories, title;
 productItem = data.items[i].product;
 images = productItem.images;
 title = productItem.title;

     for(var j = 0; j < images.length; j++){
       var link = images[j].link;
       if(images.length > 1){
         console.log("Title:", title);
         console.log("Product Link:", link);
       }
     }
   }
*/

/* Solution to question 4
for(var i = 0; i < data.items.length; i++){

var productItem, inventories, title;
 productItem = data.items[i].product;
 brand = productItem.brand;
 title = productItem.title;


       if(brand == "Canon" || "canon"){
         console.log("Title:", title);
         console.log("Product Details:", productItem);
       }
     }

*/

/* Solution to question 5
for(var i = 0; i < data.items.length; i++){

var productItem, inventories, title;
 productItem = data.items[i].product;
 brand = productItem.brand;
 author = productItem.author.name.includes("eBay");


       if(brand === "Canon" && author) {
         //console.log("Title:", author);
         console.log("Product Details:", productItem);
       }
     }
*/
