const removeTask = (e) => {
  e.target.parentNode.remove();
  console.log(e.target.parentNode);
};

document
  .querySelectorAll("li button")
  .forEach((item) => item.addEventListener("click", removeTask));
