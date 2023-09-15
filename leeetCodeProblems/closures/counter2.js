var createCounter = function(init) {
    let thisCnt = init;

    return {
        increment : () => ++thisCnt,
        decrement : () =>  --thisCnt,
        reset : () => thisCnt = init
    }
};
