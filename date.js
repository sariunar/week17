function formatDate(date) {
    let diffDate = Date.now() - date;
    let secs = Math.round(diffDate / 1000);
    let mins = Math.round(diffDate / (60 * 1000));
    if (diffDate < 1000) {
        return ("прямо сейчас");
    } else if (secs < 60) {
        return (`${secs} сек. назад`);
    } else if (mins < 60) {
        return (`${mins} мин. назад`);
    } else {
        let outputDate = date.toLocaleDateString("ru", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
        });

        let outputTime = date.toLocaleTimeString("ru", {
            hour: "2-digit",
            minute: "2-digit"
        });

        return (`${outputDate} ${outputTime}`);
    }
}
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
console.log(formatDate(new Date(2014, 2, 1, 11, 22, 33)));
