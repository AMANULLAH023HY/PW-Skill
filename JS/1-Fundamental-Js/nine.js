const arr=[1,2,999,56,"mithun",1234,"PW"];

for(const element of arr){

    if(typeof element === "string"){
        console.log("Found string :", element);
        break;
    }

}