
function containChar(text, char){
    if(text.includes(char) === true){
        return true
    }
    return false;
}
console.log(containChar("hola", "o"))