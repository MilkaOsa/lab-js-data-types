/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const camelTail = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(camelTail);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
console.log(tipAmount);






/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Print out the randomNumber
console.log(randomNumber);




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Guess the output and compare it with actual results

// 1. a && b
// AND: solo es verdadero si ambos son verdaderos. En este caso, a es true y b es false.
const expression1 = a && b;  // false

// 2. a || b
// OR: es verdadero si al menos uno de los dos es verdadero. a es true, por lo tanto, el resultado es true.
const expression2 = a || b;  // true

// 3. !a && b
// NOT a: convierte a (true) en false. Entonces, false && b (false). Ambos son falsos.
const expression3 = !a && b;  // false

// 4. !(a && b)
// Primero evaluamos a && b, que es false, y luego el NOT de false es true.
const expression4 = !(a && b);  // true

// 5. !a || !b
// NOT a es false, NOT b es true. OR entre false y true da true.
const expression5 = !a || !b;  // true

// 6. !(a || b)
// Primero evaluamos a || b, que es true. El NOT de true es false.
const expression6 = !(a || b);  // false

// 7. a && a
// AND entre dos valores verdaderos da true.
const expression7 = a && a;  // true

// Print the actual results
console.log("expression1:", expression1);  // false
console.log("expression2:", expression2);  // true
console.log("expression3:", expression3);  // false
console.log("expression4:", expression4);  // true
console.log("expression5:", expression5);  // true
console.log("expression6:", expression6);  // false
console.log("expression7:", expression7);  // true
