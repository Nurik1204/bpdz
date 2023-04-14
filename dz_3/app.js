for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log('fizzbuz')
    else if (i % 3 === 0)
        console.log('fizz')
    else if (i % 5 === 0)
        console.log('buz')
    else {
        console.log(i)
    }
}

//DZ-3-2
var mass = ['milk','beer','beer','milk','milk']
var good = ['milk']
var bad = ['beer']
for (var i = 0; i<mass.length; i++){
    if (bad.includes(mass[i])){
        console.log(`${mass[i]} bad`)
    }else if (good.includes(mass[i])){
        console.log(`${mass[i]} good`)
    }
}

