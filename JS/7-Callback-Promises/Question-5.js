function greets(name){
    return new Promise ((resolve)=>{
        const greeting = `Hello ${name}`;
        resolve(greeting);
    });

}

greets("Adil").then((message)=>console.log(message));