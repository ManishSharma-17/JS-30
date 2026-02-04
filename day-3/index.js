// Example demonstrating static members in JavaScript classes

class Calculator {
    // Static property
    static PI = 3.14159;

    // Static method
    static add(a, b) {
        return a + b;
    }

    // Instance method (non-static)
    multiply(a, b) {
        return a * b;
    }
}

// but static members can be inherited with subclasses
class AdvancedCalculator extends Calculator {
    // New static method in subclass
    static subtract(a, b) {
        return a - b;
    }
}

// Accessing static members from subclass
console.log(AdvancedCalculator.PI);         // Output: 3.14159
console.log(AdvancedCalculator.add(5, 2)); // Output: 7
console.log(AdvancedCalculator.subtract(5, 2)); // Output: 3

// Accessing static members
console.log(Calculator.PI);      // Output: 3.14159
console.log(Calculator.add(2, 3)); // Output: 5

// Attempting to access static members on an instance results in undefined or an error
const myCalc = new Calculator();
console.log(myCalc.PI);          // Output: undefined
console.log(myCalc.add(2, 3));   // Output: TypeError: myCalc.add is not a function

// Accessing the instance method
console.log(myCalc.multiply(2, 3)); // Output: 6
