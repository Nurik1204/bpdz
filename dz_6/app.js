const btns = document.querySelectorAll('.counter_btn');

btns.forEach(btn => {
    btn.addEventListener('click', function (){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter_value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1;
        }else {
            newValue = currentValue - 1;
        }
        inp.value = newValue
    })
})


//
// let Plus = document.getElementById("Plus");
// let Minus = document.getElementById("Minus");
// let count = document.getElementById("Number");
// let count2 = document.getElementById("num");
// let number1 = 1;
// let price = 350;
//
// buttonCountPlus.onclick = function() {
//     if (number <= 3) {
//         number++;
//         count.innerHTML = number;
//         count2.value = number * price;
//     }
// };
//
// buttonCountMinus.onclick = function() {
//     if (number >= 2) {
//         number--;
//         count.innerHTML = number;
//         count2.value = number * price;
//     }
// }