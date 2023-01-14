let btn = document.querySelector(".btn");
let comment = document.querySelector("#comment");
let arr = [];

btn.addEventListener('click', () => {
    arr.push(checkSpam());
    addComment();
    comment.value = '';
});

function addComment() {
    let str = '';
    for (let task of arr) {
        str += `<div class="addCom"><span>${task}</span></div><br>`
    }
    document.getElementById("container").innerHTML = str;
}

function checkSpam() {
    let res = comment.value;
    res = res.replace(/viagra/gi, "***");
    res = res.replace(/xxx/gi, "***");
    return res;
}

/*Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***`
Функция должна быть нечувствительна к регистру:
let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
let comment2 = checkSpam('free xxx'); //результат free ***
let comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit */