// Immediately-Invoked Function Expression (IIFE)
(function () {
    console.log('var:');
    console.log('Before declaration and assignment:', value);
    value = 'not declared, defined';
    console.log('After assignment but before declaration:', value);
    var value = 'declared, defined';
    var value = 'declared second time';
    console.log(value);
})();

console.log();

console.log('let/const:');
{
    // Babel doesn't have Temporal Dead Zone but JSHint will detect usage of undeclared variable
    // console.log('Before outer assignment:', value); // ReferenceError: value is not defined
    const value = 'outer';
    {
        // console.log('Before inner assignment:', value); // ReferenceError: value is not defined -- WTF, JS?
        const value = 'inner';
        console.log('After inner assignment:', value);
    }
    console.log('After inner block end:', value);
}
// console.log(value); // ReferenceError: value is not defined

let other = 'declared';
// let other = 'declared second time'; // SyntaxError: Identifier 'other' has already been declared