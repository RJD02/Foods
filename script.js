const icons = document.querySelectorAll(".section1-icons i");
let counter = 1;
setInterval(() => {
  counter++;
  const icon = document.querySelector(".section1-icons .change");
  icon.classList.remove("change");
  if (counter > icons.length) {
    icons[0].classList.add("change");
    counter = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
