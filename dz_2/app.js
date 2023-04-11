const Starbucks = {
    drinks: {
        coffee: {
            americano: "Классический кофе на основе эспрессо с большим количеством горячей воды",
            latte: false ,
            cappuccino: "Классический кофе на основе эспрессо с добавлением молочной пены",  },
        tea: {
            black: false,
            green: "Зеленый чай",
            herbal: "Травяной чай",  },
    }
};

const drink = prompt('Какое напиток желаете?')

if (drink in Starbucks.drinks.coffee && Starbucks.drinks.coffee[drink]==false ||
    drink in Starbucks.drinks.tea && Starbucks.drinks.tea[drink]==false ){
    console.log("Выберите что-то другое")
}else if (drink in Starbucks.drinks.coffee && Starbucks.drinks.coffee[drink]!=false ||
    drink in Starbucks.drinks.tea && Starbucks.drinks.tea[drink]!=false ){
    console.log('Ваш заказ принят')
}else {
    console.error('error')
};

