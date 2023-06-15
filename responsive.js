burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
nav_list = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class');
    nav_list.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})