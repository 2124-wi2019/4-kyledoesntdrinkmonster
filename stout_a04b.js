/*Kyle Stout
  stout_a04b
  INFO 2124WW
  Thoendel
  1-12-2020
*/
var name = 'Kyle';
var weight = '250.0';
var height = 70.0;
var age = '28';
const marsGravity = 0.38;
const inchesToMeters = 2.54;
let ageInDays = Number(age) * 365;
let marsAge = ageInDays / 687;
let marsWeight = parseFloat(weight) / marsGravity;
let intHeight = parseInt(height);
let meterHeight = intHeight * inchesToMeters;




console.log('Hello there, ${name}! On earth you weigh ${ String(marsWeight) }.');
console.log('But, since gravity is weaker on the Mars, you would only weigh ${} pounds there!');
console.log(' ');
console.log('Neat huh? Want to know what else is neat?');
console.log(' ');
console.log('Mars takes longer to rotate around the Sun then does Earth. This means the Mars year is actually');
console.log('longer than our "terrain" year. So although you are ${age} years old on Earth, youre');
console.log('only ${String(marsAge)} years old on Mars. ');
console.log(' ');
console.log('Did you know, the Eurpoean Space Agency requires potential astronauts to measure between');
console.log('153 and 190 cm? Just in case you ever decide to move to Europe and want to be');
console.log('and astronaut, your height in metric is ${String(meterHeight)} cm.')


