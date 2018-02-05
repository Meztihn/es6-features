const coordinates = [2, 4, 8];
const [x, y] = coordinates;
console.log('Array values: x =', x, 'y =', y);

const option = { code: '1', name: 'name' };
const { code, name: text } = option;
console.log('Object values: code =', code, 'text =', text);