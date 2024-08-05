// Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł w tablicy. Jeśli tak wyświetl wiadomośc w <div>
// wielkośc liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedynczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
passwords.forEach((item, i) => {
    if (item.toLowerCase() === e.target.value.toLowerCase()) {
        document.querySelector("div").textContent = messages[i];
    }
})
}

input.addEventListener("input", showMessage)