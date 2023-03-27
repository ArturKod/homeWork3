// 1.
// let name = prompt('введите ваше имя');
// alert('Привет, ' + name + '!');

// 2.
// const year = 2023;
// let bDate = +prompt('введите год вашего рождения');
// let age = year - bDate; 
// alert('Вам ' + age + ' лет');

// 3.
// let s = +prompt('Введите длину стороны квадрата');
// let per = s * 4;
// alert(per + ' см');

// 4.
// let r = +prompt('Введите радиус круга');
// let π = Math.PI;
// let s = Math.floor(r * π);
// alert('Площадь: ' + s + ' см');

// 5.
// let distance = +prompt('введите расстояние до города');
// let time = +prompt('время за которое необходимо добраться');
// let speed = distance / time;

// alert (speed + ' км/ч');

// 6.

// let userMoney = +prompt('у меня есть');
// const euro = 0.9279;
// let convert = euro * userMoney;

// alert('У вас: ' + convert + ' EUR');

// 7.
// let memoryCard = +prompt('какой объём памяти(в гб) на вашей шлешке?');
// const gb = 1000;
// let calc = Math.floor((memoryCard * gb) / 820);
// if(memoryCard > 1 && memoryCard < 5) {
//     alert('на вашей флешке поместится: ' + calc + ' файла');
// } else if (memoryCard >= 5) {
//     alert('на вашей флешке поместится: ' + calc + ' файлов');
// } else {
//     alert('на вашей флешке поместится: ' + calc + ' файл');
// }

// 8.
// let money = +prompt('сколько у вас денег?');
// let cost = +prompt('сколько стоит шоколадка?');
// let a = Math.floor(money / cost);
// cost *= a;
// let b = money - cost;

// alert('вы можете купить: ' + a + ' шоколадок');
// alert(b + ' рублей сдачи');

// 9.
// let num = prompt('введите трёхзначное число');
// let answer = [];
// for (let i = 0; i < num.length; i++) {
//      answer.unshift(num[i]);
// }
// alert(answer.join(''));

// let number = +prompt('введите трёхзначное число');


// if (number > 99 && number < 1000) { 
//     let one = Math.floor(number / 100);
//     let two = Math.floor(number % 100 / 10);
//     let three = Math.floor(number % 10);
//     let numReverse = three * 100 + two * 10 + one;
//   console.log(numReverse);
//   }
   
// 10.
// let num = +prompt('введите целое число'); 
// let result = (num % 2 == 0) ? 'чётное' : 'нечётное';
// alert(result);