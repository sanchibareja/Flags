let products = [
    {
        productId : 501,
        title : "Leather Wallet",
        price : 45.00,
        category : "Fashion",
        rating : 4.2,
        isFeatured : true
    },
    {
        productId: 502,
        title: "Wireless Headphones",
        price: 120.00,
        category: "Electronics",
        rating: 4.5,
        isFeatured: true
    },
    {
        productId: 503,
        title: "Running Shoes",
        price: 85.00,
        category: "Footwear",
        rating: 4.3,
        isFeatured: false
    },
    {
        productId: 504,
        title: "Smart Watch",
        price: 199.99,
        category: "Electronics",
        rating: 4.6,
        isFeatured: true
    },
    {
        productId: 505,
        title: "Denim Jacket",
        price: 70.00,
        category: "Fashion",
        rating: 4.1,
        isFeatured: false
    },
    {
        productId: 506,
        title: "Backpack",
        price: 40.00,
        category: "Accessories",
        rating: 4.0,
        isFeatured: true
    },
    {
        productId: 507,
        title: "Sunglasses",
        price: 25.00,
        category: "Fashion",
        rating: 3.9,
        isFeatured: false
    },
    {
        productId: 508,
        title: "Bluetooth Speaker",
        price: 60.00,
        category: "Electronics",
        rating: 4.4,
        isFeatured: true
    },
    {
        productId: 509,
        title: "Office Chair",
        price: 150.00,
        category: "Furniture",
        rating: 4.2,
        isFeatured: false
    },
    {
        productId: 510,
        title: "Water Bottle",
        price: 15.00,
        category: "Lifestyle",
        rating: 4.3,
        isFeatured: true
    },
    {
        productId: 511,
        title: "Gaming Mouse",
        price: 55.00,
        category: "Electronics",
        rating: 4.6,
        isFeatured: true
    },
    {
        productId: 512,
        title: "T-Shirt",
        price: 20.00,
        category: "Fashion",
        rating: 4.0,
        isFeatured: false
    },
    {
        productId: 513,
        title: "Perfume",
        price: 90.00,
        category: "Beauty",
        rating: 4.5,
        isFeatured: true
    },
    {
        productId: 514,
        title: "Laptop Stand",
        price: 35.00,
        category: "Accessories",
        rating: 4.2,
        isFeatured: false
    },
    {
        productId: 515,
        title: "Fitness Band",
        price: 65.00,
        category: "Electronics",
        rating: 4.1,
        isFeatured: true
    }
];

let totalLength = products.length;
// TASK - 1 DISPLAY PRODUCT INFO
function display(){
    for(let i=0;i<totalLength;i++){
        console.log("Product Id: ",products[i].productId);
        console.log("Title: ",products[i].title);
        console.log("Price: $",products[i].price);
        console.log("Category: ",products[i].category);
        console.log("Rating: ",products[i].rating,"Stars");
        console.log("Featuring: ",products[i].isFeatured);
    }
}
display();

// TASK - 2 CALCULATE TOTAL VALUATION
let sum = 0;
function totalCatalogValue(){
    for(let i=0;i<totalLength;i++){
        sum += products[i].price;
    }
    console.log("Total Catalog Value: $",sum);
}
totalCatalogValue();

// TASK - 3 IDENTIFY PREIUM PRODUCTS
function premiumProducts(){
    console.log("Products that cost more than $100 :- ");
    for(let i=0;i<totalLength;i++){
        if(products[i].price > 100){
            console.log(products[i].title, " : $" ,products[i].price);
        }
    }
}
premiumProducts();

// TASK - 4 APPLY MONDAY DISCOUNT
function discount(){
    for(let i=0;i<totalLength;i++){
        console.log(products[i].title, "- Original Price: $",products[i].price , "| Promo Price: $", (products[i].price - (0.10 * products[i].price)));
    }
}
discount();

// TASK - 5 FEATURED ITEMS
function featured(){
    let category;
    let items = {};
    for(let i=0;i<totalLength;i++){
        if(products[i].isFeatured){
            category = products[i].category;
            if(items[category]){
                items[category]++;
            }
            else{
                items[category]=1;
            }
        }
    }
    for(let category in items){
        console.log(category, " - " ,items[category]);
    }
}
featured();

// TASK - 6 HIGHEST RATING
let max = products[0].rating;
let maxIndex = 0;
function topRating(){
    let i;
    for(i=0;i<totalLength;i++){
        if(products[i].rating > max){
            max = products[i].rating;
            maxIndex = i;
        }
    }
    console.log("Top Rated Product - ",products[maxIndex].title, " ",max," Stars");
}
topRating();

// TASK - 7 STATUS
let recommend = 0;
let satisfactory = 0;
let reviews = 0;
function findStatus(){
    let j;
    for(j=0;j<totalLength;j++){
        if(products[j].rating >= 4.5){
            recommend++;
            console.log(products[j].title, "- Highly Recommended");
        }
        else if(products[j].rating >= 3.5 || products[j].rating <= 4.4){
            satisfactory++;
            console.log(products[j].title, "- Satisfactory");
        }
        else if(products[j].rating < 3.5){
            reviews++;
            console.log(products[j].title, "- Need Reviews");
        }
    }
}
findStatus();

// TASK - 8 COUNT PRODUCTS BY SATISFACTION TIER
function getCountStatus(){
    console.log("Highly Recommended: ",recommend);
    console.log("Satisfactory: ",satisfactory);
    console.log("Need Reviews: ",reviews);
} 
getCountStatus();

// TASK - 9 FEATURED ONLY
console.log("Items that are only featured -");
function print(){
    for(let k=0;k<totalLength;k++){
          if(products[k].isFeatured){
            console.log(products[k].title);
          }
    }
}
print();

// TASK - 10 STORE PERFORMANCE REPORT
function showReport(){
    console.log("---- COLLEGE PERFORMANCE REPORT ----");
    console.log("Total Catalog Items: ",totalLength);
    console.log("Highly Recommended Items: ",recommend);
    console.log("Satisfactory Items: ",satisfactory);
    console.log("Underperforming: ",reviews);
    console.log("Max Product Rating: ",max);
}
showReport();