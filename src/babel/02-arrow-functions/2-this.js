this.value = 'outer';

console.log('Default:');
testThis(function () { return this.value; });

console.log();

console.log('Arrow:');
testThis(() => this.value);

console.log();

console.log('Using self:');
const self = this;
testThis(function () { return self.value; });

function testThis(getValue) {
    const container = {
        value: 'inner',
        getValue
    };
    const empty = { getValue };
    console.log('container.getValue():', container.getValue());
    console.log('empty.getValue():', empty.getValue());
}