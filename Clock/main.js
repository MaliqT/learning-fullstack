const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds === 0) {
         document.querySelectorAll(".hand").forEach(hand => {
            hand.style.transition = "none";
         });
    }
    else {
        document.querySelectorAll(".hand").forEach(hand => {
            hand.style.transition = "all 0.1s cubic-bezier(0.1, 2.7, 0.58, 1)";
        })
    }

    console.log(seconds);
}

setInterval(setDate, 1000);