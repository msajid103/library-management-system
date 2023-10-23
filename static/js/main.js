
let btn = document.getElementsByClassName("nav-btn");
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let login_form = document.querySelector(".login-form-container ");
let form_close= document.querySelector("#form-close");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current");
        this.className += " current";
    })
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active')
}
searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active')
})


loginBtn.addEventListener('click', function () {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active')
    login_form.style.top = "0";
    loginBtn.classList.remove('fa-user');
})
form_close.addEventListener('click', function () {
    loginBtn.classList.add('fa-user');
    login_form.style.top = "-200%";
})
