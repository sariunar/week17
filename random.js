let add = document.querySelector('.add');
let result = document.querySelector('.result');
let arr = [];
add.addEventListener('click', () => {
    let i = 0;
    while (i < 10) {
        arr.push(Math.round(Math.random() * (10 - (-10)) + (-10)));
        i++;
    }

    let sum = arr.reduce((sum, el) => {
        return sum + el;
    });

    let incr = arr.reduce((num, el) => {
        return num * el;
    });

    result.innerHTML = "Массив: " + arr + '<br>' + "Минимальное: " + Math.min.apply(null, arr) + '<br>' + "Максимальное: " + Math.max.apply(null, arr) + '<br>' + "Сумма: " + sum + '<br>' + "Среднее арифметическое: " + (sum / arr.length) + '<br>' + "Произведение чисел: " + incr;
    arr = [];
});