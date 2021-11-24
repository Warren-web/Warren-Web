//temperature for kelvin
let kelvin = 293;
//celsius temperature
let celsius = kelvin - 273;
//temperature for farenheit
let farenheit = celsius * (9/5) + 32;
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees farenheit`)