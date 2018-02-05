const outer = {
    code: '2',
    inner: { name: 'inner name' }
};
const {
    code: outerCode,
    inner, // have to specify separately
    inner: { name: innerName }
} = outer;
console.log('Nested object: outer.code =', outerCode, 'outer.inner =', inner, 'outer.inner.name =', innerName);