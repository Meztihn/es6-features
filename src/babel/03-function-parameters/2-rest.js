function append(list, ...values) {
    return list.concat(values);
}

const list = [1, 2, 3];
console.log(append(list, 4, 5));