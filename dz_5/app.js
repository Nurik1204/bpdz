function reverseString(str){
    var newString = ['фронтенд', 'апрель', 'урок'];
    for (var i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    return  newString;
}
console.log(reverseString('фронтенд', 'апрель', 'урок'))



// дз-2
// const getAverage = (numbers) => {
//     const sum = numbers.reduce((acc, number) => acc + number, 0);
//     const length = numbers.length;
//     return sum / length;
// }