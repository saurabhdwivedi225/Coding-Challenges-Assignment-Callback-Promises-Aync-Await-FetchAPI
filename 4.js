/*4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order. */

// Solution :- 
// list of books 
const books = [
   {
   title:"Khushi",
   author:"Sagar",
   year:2023,
},
{
   title:"Kahakasha",
   author:"Virendra",
   year:2020
},
{
   title:"Arun",
   author:"Anu",
   year:2018
},
{
   title:"Nothing is Impossible",
   author: "Derosta Disuza",
   year:1998
}
]

   function logTitlesAlphabetically(forbooks,callback){
   const titles = forbooks.map((book) => book.title).sort();
      callback(titles);
    }
    logTitlesAlphabetically(books,printTitles);

   // callback function 

   function printTitles(titles) {  
        console.log(titles.join())
      }
   
