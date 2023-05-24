function animation(args, elem){
    let i = {
        radius:250,
        speed:20
    }
    let f = 0;
    let s = 2 * Math.PI / 180;
    setInterval(function() {
        f += s;
        elem.style.left =  235 + i.radius * Math.sin(f)  + 'px';
        elem.style.top =   235 + i.radius * Math.cos(f) + 'px';
    }, i.speed)
}

const secondsEl = document.getElementById('seconds');

let seconds = 0;
const intervalId = setInterval(() => {
    seconds++;
    secondsEl.innerText = seconds;

    if (seconds === 60) {
        clearInterval(intervalId);
        alert ("60 секунд прошло!");
    } console.log(seconds);

}, 1000);
