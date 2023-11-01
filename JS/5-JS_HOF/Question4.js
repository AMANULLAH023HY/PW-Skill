const books = [
    {
        name: "java",
        author: "Herbert Schildt",
        year: 2010
    },

    {
        name: "javaScript",
        author: "David Flanagan",
        year: 2015
    },
    {
        name: "PHP",
        author: "Lynn Beighley",
        year: 2010
    },
    {
        name: "Python",
        author: "Eric Matthes",
        year: 2010
    },

    {
        name: "NodeJS",
        author: "David Herron",
        year: 2010
    },
];

console.log(books);


const filterBooks = books.filter((book) => {
    return book.year <= 2010;

});
const result = filterBooks.map((book) => {

    return {
        ...book,
        author: book.author.toLocaleUpperCase(),
    };
});
console.log(result);