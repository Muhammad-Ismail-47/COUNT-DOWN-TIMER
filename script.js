const days = document.getElementById("days"); // GETTING ELEMENT WHERE DAYS WILL BE SHOWN
const hours = document.getElementById("hours"); // GETTING ELEMENT WHERE HOURS WILL BE SHOWN
const minutes = document.getElementById("minutes"); // GETTING ELEMENT WHERE MINUTES WILL BE SHOWN
const seconds = document.getElementById("seconds"); // GETTING ELEMENT WHERE SECONDS WILL BE SHOWN

// FUNCTION TO CALCULATE REMAING DAYS, HOURS, MINUTES & SECONDS
const clock = (ending_date_and_time) => {

    let end_date = new Date(ending_date_and_time); // SET ENDING DATE AND TIME
    let curr_date = new Date; // GETS THE CURRENT DATE AND TIME

    /* NOTE => THE DIFFERENCE OF END AND CURRENT DATE GIVES THE REMAINING MILLISECONDS 
       BETWEEN THE CURRENT DATE&TIME AND ENDING DATE&TIME  */
    const diff = (end_date - curr_date) / 1000; // CONVERTING MILLISECONDS INTO SECONDS
    /* 
        1 DAY = 24 HOURS
        1 HOUR = 60 MINUTES
        1 MINUTE = 60 SECONDS
    */
    if (diff < 0) return;
    // CONVERTING MILLISECONDS INTO DAYS
    days.value = Math.floor(diff / (60 * 60) / 24);
    hours.value = Math.floor((diff / (60 * 60)) % 24); // CONVERTING INTO HOURS
    minutes.value = Math.floor((diff / 60) % 24); // CONVERTING INTO MINUTES
    seconds.value = Math.floor(diff % 60); // CONVERTING INTO SECONDS
}


/* <==== SELECT-ENDING-DATE OK BUTTON ====> */
let display_date = document.getElementById("set-date"); // GETTING ELEMENT WHERE TO SHOW ENTERED DATE
let entered_date = document.getElementById("enter-date"); // GETTING ELEMENT WHERE DATE IS ENTERED

let date_ok_btn = document.getElementById("date-btn"); // GETTING DATE OK BUTTON

/* FUNTION TO DISPLAY ENTERED DATE ON SCREEN WHEN THE OK BUTTON IS CLICKED */
date_ok_btn.addEventListener("click", () => {

    if (!entered_date.value) {
        alert("Plz! Select the End Date First");
    }
    else {
        display_date.innerHTML = entered_date.value;
    }
})


/* <==== SELECT-ENDING-TIME OK BUTTON ====> */
let display_time = document.getElementById("set-time"); // GETTING ELEMENT WHERE TO SHOW ENTERED TIME
let entered_time = document.getElementById("enter-time"); // GETTING ELEMENT WHERE TIME IS ENTERED

let time_ok_btn = document.getElementById("time-btn"); // GETTING TIME OK BUTTON

/* FUNTION TO DISPLAY ENTERED TIME ON SCREEN WHEN THE OK BUTTON IS CLICKED */
time_ok_btn.addEventListener("click", () => {
    if (!entered_time.value) {
        alert("Plz! Select the End Time First");
    }
    else {
        display_time.innerHTML = entered_time.value;
    }
})


let display_date_and_time = document.getElementById("display_date_and_time"); // GETTING ELEMENT WHERE BOTH DATE AND TIME WILL BE DISPLAYED
let submit = document.getElementById("submit");  // GETTING THE SUBMIT BUTTON 

/* FUNTION TO DISPLAY ENDING DATE AND TIME + STARTING THE TIMER */
let timer;
submit.addEventListener("click", () => {
    if (!entered_time.value || !entered_date.value) {
        alert("Plz! Select Both End Date & Time");
    }
    else {
        let ending_date_and_time = entered_date.value + " " + entered_time.value;
        display_date_and_time.innerHTML = `<span>Ends At:</span> ${entered_date.value} <span>On</span> ${entered_time.value}`;

        if (timer) {
            clearInterval(timer);
        }

        timer = setInterval(() => {
            clock(ending_date_and_time);
        }, 1000);
    }
})



