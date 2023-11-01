const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
function displayCarProperties(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);
    }
}
displayCarProperties(car);
