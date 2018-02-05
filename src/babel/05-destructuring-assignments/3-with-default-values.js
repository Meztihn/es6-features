const singletonList = [42];
const [first = 0, second = 0] = singletonList;
console.log('List values: first =', first, 'second =', second);

const entity = { guid: '123e4567-e89b-12d3-a456-426655440000' };
const { guid = null, sum = 0 } = entity;
console.log('Entity values: guid =', guid, 'sum =', sum);