const date = new Date();

const renderCalendar=()=>{
    const monthDays = document.querySelector('.days')
    const months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    const previousLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay() - 1;
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;


    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = date.toDateString();

    let days="";

    for(let b=firstDayIndex; b>0; b--){
        days+=`<div class="previous-date">${previousLastDay - b + 1}</div>`
    }

    for(let a=1; a<=lastDay; a++){

        days+=`<div>${a}</div>`;
    }

    for(let c=1; c<=nextDays;c++){
        days+=`<div class="next-date">${c}</div>`;
    }
    monthDays.innerHTML = days;

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