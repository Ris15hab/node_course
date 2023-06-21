//let input=window.prompt("Enter Location");

const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempstatus = "{%tempstat%}";

if (tempstatus == "Sunny") {
    weathercon.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempstatus == "Clouds") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempstatus == "Rainy") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}

console.log(weathercon);
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thurdday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
}

const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    var hours = now.getHours();
    var mins = now.getMinutes();

    var period = "AM";

    if (hours > 11) {
        period = "PM"
        if (hours > 12)
            hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month}, ${date} | ${hours}:${mins}${period}`;
}

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
