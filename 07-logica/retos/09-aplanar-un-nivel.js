function flattenOneLevel(arr) {
    if(Array.isArray(arr)){
        let result = arr.flat()// 
        return result
    }
    return [];
}


console.log(flattenOneLevel([1, [2,3], [4,5]]))



