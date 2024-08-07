// Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł w tablicy. Jeśli tak wyświetl wiadomośc w <div>
// wielkośc liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedynczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
})

const showMessage = (e) => {
    const input = e.target.value.toLowerCase()
passwords.forEach((password, i) => {
    if (password === input) {
        document.querySelector("div").textContent = messages[i];
    }
})
}

input.addEventListener("input", showMessage)