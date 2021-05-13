let active = document.getElementsByClassName("circle_check_cross");
for (const circle of active) {
  console.log(circle);
  circle.addEventListener("click", (e) => {
    const id = e.target.id;
    const todo = document.getElementById(id);
    if (todo.hasChildNodes()) {
      todo.classList.remove("bg");
      todo.parentElement.childNodes[3].classList.remove("line");
      todo.parentElement.childNodes[3].style.color = "hsl(0, 0%, 98%)";
      todo.removeChild(todo.childNodes[0]);
      console.log(todo.childNodes);
    } else {
      todo.classList.add("bg");
      todo.parentElement.childNodes[3].classList.add("line");
      todo.parentElement.childNodes[3].style.color = "grey";
      const image = document.createElement("img");
      image.src = "./images/icon-check.svg";
      image.id = "im";
      todo.appendChild(image);
    }
  });
}
