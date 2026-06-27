//       ----------------------- COLLEGE LIBRARY PROBLEM STATEMENT -----------------------

let books = [
    { BookId : 101 , Title : "B Programming", Category : "Programming" , Author : "Dennis Ritchie", Copies : 5 },
    { BookId : 102 , Title : "Data Structures", Category : "Programming", Author : "S . Lipschutz", Copies : 3 },
    { BookId : 103 , Title : "Database Management System", Category : "Database", Author : "Korth", Copies : 2 },
    { BookId : 104 , Title : "Computer Networks", Category : "Networking", Author : "Andrew Tanenbaum", Copies : 1 },
    { BookId : 105 , Title : "Operaing System Concepts", Category : "Programming", Author : "Silberschatz", Copies : 4 },
    { BookId : 106 , Title : "Discrete Mathematics", Category : "Mathematics", Author : "Rosen", Copies : 6 },
    { BookId : 107 , Title : "Web Development Basics", Category : "Programming", Author : "John Duckett", Copies : 7 },
    { BookId : 108 , Title : "Linear Algebra", Category : "Mathematcs", Author : "Gilbert Strang", Copies : 2 },
    { BookId : 109 , Title : "Artificial Intelligence", Category : "AI", Author : "Stuart Russell", Copies : 3 },
    { BookId : 110 , Title : "Machine Learning", Category : "AI", Author : "Tom Mitchell", Copies : 5 },
    { BookId : 111 , Title : "Python Crash Course", Category : "Programming", Author : "Eric Matthes", Copies : 8 },
    { BookId : 112 , Title : "Computer Organizations", Category : "Hardware", Author : "Morris Mano", Copies : 4 },
    { BookId : 113 , Title : "Cloud Computing", Category : "Cloud", Author : "Rajkumar Buyya", Copies : 2 },
    { BookId : 114 , Title : "Cyber Security Basics", Category : "Security", Author : "Charles P. Pfleeges", Copies : 3 },
    { BookId : 115 , Title : "Statistics For Engineers", Category : "Mathematics", Author : "Walpole", Copies : 5 },
];


//  1-DISPLAY ALL DETAILS OF BOOKS
function display(){
    for(let book of books){
        console.log("BookId:", book.BookId);
        console.log("Title:", book.Title);
        console.log("Author:" ,book.Author);
        console.log("Category:", book.Category);
        console.log("Copies:" , book.Copies);
    }
}
display();


//  2-DISPLAY THE TOTAL NUMBER OF BOOKS
function totalBooks(){
    console.log("Total Books:" , books.length);
}
totalBooks();

//  3-LOW AVAILABILITY
function lowAvailability(){
    console.log("Low Availability Books-")
    for(let book of books){
        if(book.Copies < 3){
            console.log(book.Title);
        }
    }
}
lowAvailability();


//  4-ACCEPT BOOK ID AND DISPLAY DETAILS
console.log("Enter book id:");
let num = Number(prompt("Enter book id:"));
console.log(num);
if(num >= 101 && num <= 115){
for(let book of books){
    if(num == book.BookId){
        console.log("Book Found");
        console.log(book.Author);
        console.log(book.Title);
    }
}
}
else{
    console.log("Not Found");
}



//  5-CATEGORY WISE BOOK COUNT
function categoryBookCount(){
    let programming = 0;
    let security = 0;
    let mathematics = 0;
    let cloud = 0 ;
    let hardware = 0;
    let database = 0;
    let networking = 0;
    let ai = 0 ;
    for(let book of books){
        if(book.Category == "Programming")
            programming++;
        if(book.Category == "Security")
            security++;
        if(book.Category == "Mathematics")
            mathematics++;
        if(book.Category == "Cloud")
            cloud++;
        if(book.Category == "Hardware")
            hardware++;
        if(book.Category == "Database")
            database++;
        if(book.Category == "Networking")
            networking++;
        if(book.Category == "AI")
            ai++;
    }
    console.log("Programming: ",programming);
    console.log("Security: ",security);
    console.log("Mathematics: ",mathematics);
    console.log("Cloud: ", cloud);
    console.log("Hardware: ",hardware);
    console.log("Database: ",database);
    console.log("Networking: ",networking);
    console.log("AI: ",ai);
}
categoryBookCount();


//  6-BOOK WITH MAXIMUM COPIES
let max = books[0].Copies;
function maxCopies(){
    let cat;
    for(let book of books){
        if(book.Copies>max){
            max = book.Copies;
            cat = book.Category;
        }
    }
    console.log("Most Available Book: ");
    console.log(cat, ":" ,max);
}
maxCopies();

//  7-BOOK AVAILABILITY STATUS
let avail=0;
let limit=0;
let crit=0;
function availabilityStatus(){
    for(let book of books){
        if(book.Copies >= 5)
           { console.log(book.Title , ": Available");
            avail++;}
        else if(book.Copies == 3 || book.Copies == 4)
           { console.log(book.Title , ": Limited");
            limit++;}
        else if(book.Copies < 3)
           { console.log(book.Title , ": Critical");
            crit++;}
    }
}
availabilityStatus();

//  8-AVAILABLE BOOKS ACCORDING TO STATUS
function booksStatusCount(){
    console.log("Available: ",avail);
    console.log("Limited: ",limit);
    console.log("Critical: ",crit);
}
booksStatusCount();



//  9-PROGRAMMING BOOKS
function programmingCategory(){
    console.log("Books related to programming category-");
    for(let book of books){
        if(book.Category == "Programming")
            console.log(book.Title);
    }
}
programmingCategory();


//  10-FINAL SUMMARY
function finalSummary(){
    console.log("---------- Library Report ----------");
    console.log("Total Books Records: ",books.length);
    console.log("Available Books: ",avail);
    console.log("Limited Books: ",limit);
    console.log("Critical Books: ",crit);
    console.log("High Copies Available: ",max);
    console.log("---------- End Of Report ----------");
}
finalSummary();