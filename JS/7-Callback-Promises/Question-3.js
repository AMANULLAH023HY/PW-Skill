const person = {
    firstName : "Adil",
    lastName: "Rose",
    age: 23
}

function ageInDay(personObject, callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const personAge = personObject.age*365;
    callback(fullName,personAge);

}
function logResult(fullName,personAge){
    console.log(`The person's fullname  is ${fullName} and age is ${personAge}`);
}
ageInDay(person, logResult);