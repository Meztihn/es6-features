{
    function array() {
        return arguments;
    }
    console.log('Default:', array(1, 2, 3));
}

{
    const array = (...arguments) => arguments;
    console.log('Arrow:', array(1, 2, 3));
}