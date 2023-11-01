const books = [
    {
    title:"The god Adil ",
    author: "Adil Rose",
    year: 1999
},

{
    title:"The god Amanullah ",
    author: "Amanullah",
    year: 2000
},

{
    title:"The god Rashedin ",
    author: "Rashedin",
    year: 2001
},

{
    title:"The god Shakir ",
    author: "Shakir Hussain",
    year: 1999
},

{
    title:"The god Qyammudin ",
    author: "Qyamuddin Shaikh",
    year: 2000
},


];

function logTitle(titles){
titles.sort();
console.log(titles.join(","));
}
function extractTitles(books, callback){ 
     
    const titles = books.map((book)=>book.title)
        callback(titles);

}
extractTitles(books ,logTitle);
    
