console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const score = 400.50
console.log(score);

const balance = new Number (1000000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

//toLocaleString :- ye by default us standards ke hisab se output deta he 
console.log(balance.toLocaleString());
console.log(balance.toLocaleString('en-In')); //Indian standards me value dega

/* toPrecision :- Number of significant digits. Must be in the range 1-21,inclusive. it restruns a string containing a number represented either in exponential or fixed-point notation with a specified numbrt of digits*/
console.log(balance.toPrecision(3)); //output 1.00e+6
/*The value 1.00e+6 is written in scientific notation. 

The "1.00" is the base number.
The "e+6" means "multiply by 10 raised to the power of 6.
So, 
   1.00e+6 = 1.00 × 10⁶ = 1,000,000.
In short, 1.00e+6 represents 1 million.*/
