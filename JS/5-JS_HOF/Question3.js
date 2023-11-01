const fruits = [
    {
        name: "Mango",
        category: "Fruit",
        priceUSD: 200
    },

    {
        name: "Banana",
        category: "Fruit",
        priceUSD: 300
    },

    {
        name: "Apple",
        category: "Fruit",
        priceUSD: 500
    },

    {
        name: "potato",
        category: "Veg",
        priceUSD: 20
    },
];

const exchangerate = 80;
function convertINR(priceUSD) {
    return priceUSD * exchangerate;
}
const changeInINR = fruits.map((fruit) => ({
    ...fruit,
    priceIRN: convertINR(fruit.priceUSD),

}));
console.log(changeInINR);



