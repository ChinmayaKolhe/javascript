const score=400
console.log(score)

const balance=new Number(1000)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 1000.00 // 2 decimal places

const othernum=23.8966
console.log(othernum.toPrecision(3)); // 23.9 // 3 significant digits

const hundred=100000
console.log(hundred.toLocaleString('en-IN')); // 100,000 // Indian number system

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 // Maximum value a number can hold
console.log(Number.MIN_VALUE); // 5e-324 // Minimum value a number can hold 
console.log(Number.POSITIVE_INFINITY); // Infinity // Positive Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity // Negative Infinity
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991  // Minimum safe integer  
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 // Maximum safe integer



/*---------------Maths---------------------*/
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.abs(-10)); // 10 // Absolute value
console.log(Math.ceil(10.1)); // 11 // Round up
console.log(Math.floor(10.9)); // 10 // Round down
console.log(Math.round(10.5)); // 11 // Round to nearest integer
console.log(Math.max(10,20,30,40,50)); // 50 // Maximum value
console.log(Math.min(10,20,30,40,50)); // 10 // Minimum value
console.log(Math.pow(2,3)); // 8 // 2^3
console.log(Math.sqrt(16)); // 4 // Square root
console.log(Math.cbrt(27)); // 3 // Cube root
console.log(Math.exp(1)); // 2.718281828459045 // e^1
console.log(Math.log(10)); // 2.302585092994046 // Natural logarithm
console.log(Math.log10(100)); // 2 // Base 10 logarithm
console.log(Math.sin(0)); // 0 // Sine
console.log(Math.cos(0)); // 1 // Cosine
console.log(Math.tan(0)); // 0 // Tangent
console.log(Math.asin(0)); // 0 // Inverse Sine
console.log(Math.acos(1)); // 0 // Inverse Cosine
console.log(Math.atan(0)); // 0 // Inverse Tangent
console.log(Math.atan2(0,1)); // 0 // Inverse Tangent with two parameters
console.log(Math.sinh(0)); // 0 // Hyperbolic Sine
console.log(Math.cosh(0)); // 1 // Hyperbolic Cosine
console.log(Math.tanh(0)); // 0 // Hyperbolic Tangent
console.log(Math.asinh(0)); // 0 // Inverse Hyperbolic Sine
console.log(Math.acosh(1)); // 0 // Inverse Hyperbolic Cosine
console.log(Math.atanh(0)); // 0 // Inverse Hyperbolic Tangent
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.round(Math.random()*10)); // Random number between 0 and 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // Random number between min and max