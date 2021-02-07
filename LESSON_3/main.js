'use strict'
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let a = 1; 
        let primeArr = [];

        while (a <= 100) {
            if (a == 1) {
                primeArr.push(1)
            } else {
                let result = 2; 
                let i = 2;
                while (a % i !== 0) { 
                    i += 1;
                    result += 1;
                }
                if (result == a) {
                    primeArr.push(result);
                }
            }
            a += 1;
        }

        console.log(primeArr);

        // 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
        // 3. Товары в корзине хранятся в массиве. Задачи:
        // a) Организовать такой массив для хранения товаров в корзине;
        // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
        var basket = [ 
          {
              title: "product1",
              price: 100,
              count: 4
          },
          {
              title: "product2",
              price: 200,
              count: 5
          },
          {
              title: "product3",
              price: 300,
              count: 1
          }
        
        ];
        function countBasketPrice(basket) {
          var summ = 0;
          for (i = 0; i < basket.length; i++) {
              summ = summ + (basket[i].price * basket[i].count);
          return summ; 
        }
        var a = countBasketPrice(basket); 
      }
        console.log('Сумма в карзине:' + a);

        // 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
        for (var i = 0; i <= 9; console.log(i++)){} 
        for (var i = 0; console.log(i <= 9); i++){}

        // 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов
        var x = ""; 
        for (var i = 0; i < 20; i++) {
            x = x + "x"; 
            console.log(x); 
        }