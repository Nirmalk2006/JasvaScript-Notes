            //filters is used to select certain elements from an array based on their condition.

const userbooks =[
    {
        title : "book1", 
        author : "author1", 
        published : 1947,
        rating : 4.5
    },
    {
        title : "book2", 
        author : "author2",
        published : 1950,
        rating : 3.5
    },
      {
        title : "book3", 
        author : "author3",
        published : 1923,
        rating : 3.5
    },
      {
        title : "book4", 
        author : "author4",
        published : 1950,
        rating : 3.5
    },
      {
        title : "book5", 
        author : "author1",
        published : 1993,
        rating : 3.5
    },
      {
        title : "book6", 
        author : "author6",
        published : 1995,
        rating : 3.5
    },
      {
        title : "book7", 
        author : "author7",
        published : 2000,
        rating : 3.5
    }

]

//filtering books published before 1950
// let books = userbooks.filter((bk)=> bk.rating == 4.5);
// console.log(books);

books = userbooks.filter(function(bk){bk.published >= 1950});
console.log(bk(books));