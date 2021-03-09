var date, hours, minutes, seconds;

function changeFormat(unit) {
    if (unit < 10) {
        return ("0" + unit);
    } else {
        return unit;
    }
}

setInterval(function() {
    date = new Date();
    hours = changeFormat(date.getHours());
    minutes = changeFormat(date.getMinutes());
    seconds = changeFormat(date.getSeconds());
    document.write(hours + ":" + minutes + ":" + seconds + "<br>");
}, 1000)