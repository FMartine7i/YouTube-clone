const menuOpen = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const showSubs = document.querySelector('.show-subs')
const showSideBar = document.querySelector('.menu-sidebar')
const subsList = document.querySelector('.subscription-list')


showSideBar.addEventListener('click', () => {
    sidebar.classList.toggle("small-sidebar");
})

showSubs.addEventListener('click', () => {
    showSubs.classList.toggle('title-change');
    subsList.classList.toggle("show-subs-list");
})