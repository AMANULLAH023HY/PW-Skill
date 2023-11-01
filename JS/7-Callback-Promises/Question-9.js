fetch("https://jsonplaceholder.typicode.com/todos/1dasas")
.then((response)=>{
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
})




