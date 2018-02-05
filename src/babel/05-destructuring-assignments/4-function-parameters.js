function secondOf([, second]) {
    return second;
}
const list = [1, 2, 3];
console.log('List: second =', secondOf(list));


const guidOf = ({ guid }) => guid;
const entity = { guid: '123e4567-e89b-12d3-a456-426655440000' };
console.log('Entity: guid =', guidOf(entity));