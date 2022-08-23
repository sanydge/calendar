const date = new Date();

const renderCalendar = () => {
    const year = `${date.getFullYear()}`;
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const monthDays = document.querySelector('.days')
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const lastDay = new Date(parseInt(year), parseInt(month), 0).getDate();
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay() - 2;
    const lastDayIndex = new Date(lastDay).getDay();
    const nextDays = 7 - lastDayIndex - 1;


    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = date.getFullYear();
    document.querySelector(".schedule p").innerHTML = new Date().toDateString();


    let days = "";
    for (let b = firstDayIndex; b > 0; b--) {
        days += `<div class="previous-date">${previousLastDay - b + 1}</div>`
    }

    for (let a = 1; a <= lastDay; a++) {
        const isToday = a === new Date().getDate() && date.getMonth() === new Date().getMonth();
        const day = `${a}`.padStart(2, "0");
        days += `<div class="${isToday ? 'today' : ''}" data-date="${year}-${month}-${day}">${a}</div>`;
    }

    for (let c = 1; c <= nextDays; c++) {
        days += `<div class="next-date">${c}</div>`;
    }

    monthDays.innerHTML = days;

    let daysList = document.querySelectorAll(".days [data-date]");


    daysList.forEach(function (elem){
        elem.addEventListener("click", function (e){
           console.log(elem.dataset.date);
            document.querySelector(".schedule p").innerHTML = new Date(elem.dataset.date).toDateString();
        })
    });


    console.log(daysList);


}


document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();