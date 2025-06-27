// document.addEventListener("DOMContentLoaded", function () {
//     const circles = document.querySelectorAll(".circle");

//     circles.forEach(circle => {
//         let percent = circle.getAttribute("data-percent");
//         let degrees = (percent / 100) * 360;

//         circle.style.background = `conic-gradient(rgb(11, 57, 184) ${degrees}deg, #e0e0e0 ${degrees}deg)`;
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const circles = document.querySelectorAll(".circle");

//     circles.forEach(circle => {
//         let percent = parseInt(circle.getAttribute("data-percent"));
//         let counter = 0;
//         let angle = 0;
//         let duration = 2000; // 2 seconds
//         let interval = 20; // update every 20ms
//         let step = percent / (duration / interval);
//         let angleStep = 360 / (100 / step);

//         let progress = setInterval(() => {
//             if (counter >= percent) {
//                 clearInterval(progress);
//             } else {
//                 counter += step;
//                 angle += angleStep;
//                 circle.textContent = Math.floor(counter) + "%";
//                 circle.style.background = `conic-gradient(rgb(11, 57, 184) ${angle}deg, rgb(50, 70, 128) ${angle}deg)`;
//             }
//         }, interval);
//     });
// });



document.querySelectorAll(".skillss").forEach(skill => {
    let percentage = skill.getAttribute("data-percentage");
    let progress = skill.querySelector(".progress");
    let label = skill.querySelector(".label");
    let offset = 314 - (314 * percentage) / 100;
    
    setTimeout(() => {
        progress.style.strokeDashoffset = offset;
    }, 200);
    
    let count = 0;
    let interval = setInterval(() => {
        if (count >= percentage) {
            clearInterval(interval);
        }
        label.textContent = count + "%";
        count++;
    }, 15);
});







