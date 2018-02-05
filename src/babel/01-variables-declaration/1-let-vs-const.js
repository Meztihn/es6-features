const constantReference = { value: 42 };
let variable = { value: 42 };

variable = {};
// constantReference = {}; // TypeError: Assignment to constant variable
constantReference.value = 0;