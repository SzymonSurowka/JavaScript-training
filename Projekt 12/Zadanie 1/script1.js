const removeTask = (e) => {
  e.target.remove();
};

document
  .querySelectorAll("li button")
  .forEach((item) => item.addEventListener("click", removeTask));
