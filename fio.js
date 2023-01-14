let inputFIO = document.querySelector('.inputFIO');
const btn = document.querySelector('.btn');
let fio = '';
let secondName = document.querySelector('.secondName');
let firstName = document.querySelector('.firstName');
let middleName = document.querySelector('.middleName');
btn.addEventListener('click', () => {
    if (inputFIO.value != '') {
        fio = inputFIO.value.trim();
        fio = fio.split(" ");
        firstName.value = fio[1].toLowerCase();
        firstName.value = firstName.value[0].toUpperCase() + firstName.value.slice(1);
        secondName.value = fio[0].toLowerCase();
        secondName.value = secondName.value[0].toUpperCase() + secondName.value.slice(1);
        middleName.value = fio[2].toLowerCase();
        middleName.value = middleName.value[0].toUpperCase() + middleName.value.slice(1);
    }
    else {
        alert('Введите ФИО');
    }
});