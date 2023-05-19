export const genId = (function() {
    let seed = 0;
    return function*() {
        yield ++seed;
    }
})();