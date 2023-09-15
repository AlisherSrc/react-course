var chunk = function(arr, size) {
    let chunkedArr = [];
    for(let i = 0;i < arr.length;i+=size){
        if(i + size <= arr.length) chunkedArr.push(arr.slice(i,i+size))
        else chunkedArr.push(arr.slice(i));
    }

    return chunkedArr;
};