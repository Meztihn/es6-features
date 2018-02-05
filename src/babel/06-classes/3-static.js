class Modal {
    // static TYPES = { INFO: 'INFO' }; // Babel correctly compiles static fields but V8 doesn't
    static open(text) {
        return 'Modal window: ' + text;
    }
}

console.log(Modal.open('Are you sure you want to exit?'));