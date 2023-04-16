var tdan = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo']
var result = {};

for (var i = 0; i < tdan.length; i++){
    var type = typeof tdan[i];
    if (!result[type]) {
        result[type] = [];
    }
    result[type].push(tdan[i]);
}
var sortedResult = Object.values(result).sort((a, b) => b.length - a.length);
console.log(sortedResult)