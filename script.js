document.addEventListener("DOMContentLoaded", () => {

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.addEventListener('scroll', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
    const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-theme")){
        icon.classList.replace("bx-moon", "bx-sun");
    }else{
        icon.classList.replace("bx-sun", "bx-moon");
    }
};

    const typed = new Typed('.multiple-text', {
      strings: ['Aspiring Frontend Developer','Aspiring Backend Developer', 'Aspiring Web Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });
});