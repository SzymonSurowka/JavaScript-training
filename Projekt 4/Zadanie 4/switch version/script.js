// version 2 - instruction switch
// 38 - arrow up
// 40 - arrow down

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green} ${blue})`;

const changeColor = (e) => {
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`
            break;
        }
        console.log(red);
}

window.addEventListener("keydown", changeColor)