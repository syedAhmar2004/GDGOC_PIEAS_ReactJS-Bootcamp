import {Books} from "./books.mjs";


//1. A function that prints books titles with rating higher than 4.5
  
const highRatedBooks = () =>{
    const rating = Books.filter ((index) => index.Rating>4.5);
    const tilteOfBooks = rating.map((index) => index.Title);
    return tilteOfBooks;
}

console.log(highRatedBooks());
//-----------------------------------------------

//2. A function that iterates over an array of books and prints their details
//(title, author, rating, genre). Use destructuring to extract these values.
let printBooks = (index)=>{
    index.forEach(({Title,Author,Rating,Genre}) =>{
        console.log(`Title: ${Title}`);
        console.log(`Author: ${Author}`);
        console.log(`Rating: ${Rating}`);
        console.log(`Genre: ${Genre}`);
        console.log(`-------------------------`);

    });
};
printBooks(Books);

//3. A function that prints book titles with the genre “fiction”.
let fictionBooks = () =>{
    const fiction = Books.filter((index) => index.Genre.toLowerCase() === "fiction");
    const tilteOfBooks = fiction.map((index) => index.Title);
    return tilteOfBooks;
}
console.log(fictionBooks());

//4. A function that display an array of book authors.
let arrayOfAuthors = Books.map((index) => index.Author);
console.log(arrayOfAuthors[0]);