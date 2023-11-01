class Temperature {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 2;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._celsius = value;
            this._fahrenheit = (value * 9 / 5) + 32;
        } else {
            console.error('Invalid input for Celsius temperature. Please provide a numeric value.');
        }
    }

    get fahrenheit() {
        return this._fahrenheit;
    }

    set fahrenheit(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._fahrenheit = value;
            this._celsius = (value - 32) * 5 / 9;
        } else {
            console.error('Invalid input for Fahrenheit temperature. Please provide a numeric value.');
        }
    }
}



const temp = new Temperature();

console.log(`Celsius: ${temp.celsius}°C, Fahrenheit: ${temp.fahrenheit}°F`);

temp.celsius = 25;
console.log(`Celsius: ${temp.celsius}°C, Fahrenheit: ${temp.fahrenheit}°F`);

temp.fahrenheit = 77;
console.log(`Celsius: ${temp.celsius}°C, Fahrenheit: ${temp.fahrenheit}°F`);

temp.celsius = "Invalid";
temp.fahrenheit = "Invalid";
