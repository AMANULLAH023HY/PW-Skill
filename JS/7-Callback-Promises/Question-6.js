async function fetchApi(){
    const resopnse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resopnse.json();
    console.log(data);
}
fetchApi();