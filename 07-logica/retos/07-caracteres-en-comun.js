function commonChars(a, b){
    let newSet = new Set(a.toLocaleLowerCase())
    let newSet2 = new Set(b.toLocaleLowerCase())
    let count = 0;
    newSet2.forEach( letra => {
        if(newSet.has(letra)) count++
    })
    return count++;
}


commonChars("hello", "hello")



