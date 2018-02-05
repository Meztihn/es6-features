function entity(type, guid = generateGuid()) {
    return { type, guid };
}

let index = 0;
function generateGuid() {
    return 'generated ' + index++;
}

console.log(entity(null, undefined));
console.log(entity(null, undefined));