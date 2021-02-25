const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLink');
    const navLinks = document.querySelectorAll('.navLink li');
    // toggle Nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        // Animate Link
        navLinks.forEach((link, index) => {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/8 + 0.2}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
const app = () => {
    navSlide();
}
app();