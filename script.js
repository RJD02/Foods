const icons = document.querySelectorAll('.section1-icons i');
let counter = 0;
setInterval(() => {
    counter = counter % icons.length + 1;
    const icon = document.querySelector('.section1-icons .change');
    icon.classList.remove('change');
    icon.nextElementSibling.classList.add('change');
}, 1000);