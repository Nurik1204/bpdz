var Starbucks = {
    drinks: {
        coffee: {
            americano: "Классический кофе на основе эспрессо с большим количеством горячей воды",
            latte: "Кофе с молоком",
            cappuccino: "Классический кофе на основе эспрессо с добавлением молочной пены",  },
        tea: {
            black: "Черный чай",
            green: "Зеленый чай",
            herbal: "Травяной чай",  },
    }
};

var drinks = prompt('Какое напиток желаете?')

if (drinks in Starbucks.coffee.latte || drinks in Starbucks.tea.herbal){
    console.log("Выберите что-то другое")
}else if (drinks in Starbucks.coffee.americano || drinks in Starbucks.coffee.cappuccino){
    console.log("Ваш заказ принят")
}else if (drinks in Starbucks.tea.black || drinks in Starbucks.tea.green){
    console.log('Ваш заказ принят')
}else {
    console.error('error')
};

