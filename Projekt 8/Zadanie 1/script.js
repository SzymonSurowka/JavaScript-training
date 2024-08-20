const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum veritatis velit quibusdam facilis in mollitia unde voluptatem vero voluptates accusantium fuga, labore repudiandae assumenda perferendis facere exercitationem vitae architecto? KONIEC!";

// Parametry

let indexText = 0;
const time = 40;

// Implementacja

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
spnCursor.classList.toggle("active");
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);