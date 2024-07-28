// version 1 - instruction if
// 38 - arrow up
// 40 - arrow down

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green} ${blue})`;

const changeColor = (e) => {

    if (e.keyCode === 38 && red < 255) {
        red += 1;
        green += 1;
        blue += 1;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (e.keyCode === 40 && red >= 0) {
        red --;
        green --;
        blue --;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    console.log(red);
}

window.addEventListener("keydown", changeColor)