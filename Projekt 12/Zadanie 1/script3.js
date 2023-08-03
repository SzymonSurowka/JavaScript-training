const removeTask = (e) => {
  e.target.parentNode.style.textDecoration = "line-through";
  e.target.remove();
};

document
  .querySelectorAll("li button")
  .forEach((item) => item.addEventListener("click", removeTask));
