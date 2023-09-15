var once = function(fn) {
    let visited = false;
    return function(...args){
        if(visited) return;

        visited = true;
        return fn(...args);
    }
};