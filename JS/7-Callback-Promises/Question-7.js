async function getCombineData(){
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((Response)=>Response.json()
        ),

        fetch("https://jsonplaceholder.typicode.com/users").then((Response)=>Response.json()
        ),

    ]);
    const combineDate = {
        todo:data1,
        user:data2
    };
    return combineDate;
}
getCombineData().then((data)=>console.log(data));