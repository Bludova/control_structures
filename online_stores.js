"use strict";
var goodsStock = 1, goodsOrder = 1;
if(goodsOrder > goodsStock){
     console.log(`На складе нет такого количества товаров.`);
}else if(goodsOrder == goodsStock){
    console.log(`Вы забираете весь товар c нашего склада!`);
} else {
     console.log(`Заказ оформлен!`);
}

// Стоимость доставки
var delivery = 'Звезда смерти';
switch (delivery) {
case 'Луна' :
console.log("Стоимость доставки для области Луна: 150 Q ");
break;
case 'Крабовидная туманность':
console.log("Стоимость доставки для области Крабовидная туманность: 250 Q ");
break;
case 'Галактика Туманность Андромеды' :
console.log("Стоимость доставки для области Галактика Туманность Андромеды: 550 Q ");
break;
case 'Туманность Ориона' :
console.log("Стоимость доставки для области Туманность Ориона: 600 Q ");
break;
case 'Звезда смерти' :
console.log("Стоимость доставки для области Звезда смерти: договорная цена Q ");
break;
default :
console.log("В ваш квадрант доставка не осуществляется");
}

// Данные о товарах в базу данных заводит кладовщик.
var pricesStorekeeper;

var age = 28;
try {
if (typeof(age) !== 'number') {
    throw `\" ${age} \" не является числом `;
}
console.log(`Цена товара введена корректно.  \"${age}\"`);
} catch (err) {
console.log("Вы допустили ошибку: " + err);
}


