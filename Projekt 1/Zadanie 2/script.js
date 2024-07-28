let number = 1;
const btn = document.querySelector("button");
const list = document.querySelector("ul");
btn.addEventListener("click", function() {
    const li = document.createElement("li");
    li. textContent = number;
    list. appendChild(li);

    if (number % 3 == 0) {
        li.classList.add("big");
    }
    
    number += 2;
})