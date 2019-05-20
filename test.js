const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    var navbarHide = true;
    var navbar = document.getElementById('navbar');
    var logos = document.getElementById('icons_logo');
    var nav_menu = document.getElementById('nav_menu');

    var nav_paragr = document.getElementById('nav_paragr');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        if (navbarHide){
            //nav_paragr.style.transform = '-90%';
            var icons = document.getElementsByClassName('icons');
            for (var i = 0; i < icons.length; i++){
                icons[i].style.border = 'none';
            }
            var gray_icons = document.querySelectorAll('i');
            for (var i = 0; i < gray_icons.length; i++){
                gray_icons[i].style.color = 'gray';
            }
            logos.style.display = 'flex';
            //icons.style.border = 'none';
            logos.style.top = '500px';
            logos.style.right = '90px';
            navbar.style.display = 'block';
            nav_menu.style.display = 'block';
            nav_paragr.style.display = 'block';
            navbarHide = false;
        } else {
            var iconsHide = document.getElementsByClassName('icons');
            for (var i = 0; i < iconsHide.length; i++){
                iconsHide[i].style.border = '1.5px solid white';
            }
            var white_icons = document.querySelectorAll('i');
            for (var i = 0; i < white_icons.length; i++){
                white_icons[i].style.color = 'white';
            }
            logos.style.display = 'block';
            nav_menu.style.display = 'none';
            //icons.style.border = 'block';
            logos.style.top = '270px';
            logos.style.right = '35px';
            navbar.style.display = 'none';
            nav_paragr.style.display = 'none';
            navbarHide = true;
        }

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    })
};

navSlide();

var formHide = true;
var reg_form = document.getElementById('register_form');
var register = document.getElementById('register');
register.addEventListener('click', registration);
var checkEmail = document.getElementById('checkEmail');

function registration() {
    if (formHide) {
        reg_form.style.display = 'block';
        formHide = false;
    }
}

var close = document.getElementById('close');
close.addEventListener('click', closing);

function closing() {
    if (formHide == false) {
        reg_form.style.display = 'none';
        formHide = true;
    }
}

function validate(e) {
    e.preventDefault();
    var userName = document.getElementById('userName');
    var errorName = document.getElementById('errorName');
    var errorLengthName = document.getElementById('errorLengthName');

    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');
    var errorInputsEmail = document.getElementById('errorInputsEmail');

    var password = document.getElementById('password');
    var errorPassword = document.getElementById('errorPassword');
    var errorLengthPassword = document.getElementById('errorLengthPassword');
    var errorSymb = document.getElementById('errorSymb');

    var passwordConfirm = document.getElementById('password_confirm');
    var errorConfirm = document.getElementById('errorConfirm');
    /*var LetterUppercase = /^[A-Z]/.test(password);*/
    //var testEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var testEmail = email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var passUppercase = password.value.match(/^[A-Z]/);

    if(!userName.value){
        userName.style.borderBottomColor = 'red';
        errorName.style.display = 'block';
        return false;
    }

    else if (userName.value.length < 2) {
        userName.style.borderBottomColor = 'red';
        errorLengthName.style.display = 'block';
        return false;
    }

    if(!email.value){
        email.style.borderBottomColor = 'red';
        errorEmail.style.display = 'block';
        return false;
    }

    if(!testEmail){
        email.style.borderBottomColor = 'red';
        errorInputsEmail.style.display = 'block';
        return false;
    } else {
        email.style.borderBottomColor = 'green';
        errorInputsEmail.style.display = 'none';
    }

    if(!password.value){
        password.style.borderBottomColor = 'red';
        errorPassword.style.display = 'block';
        return false;
    }

    else if(password.value.length < 6){
        password.style.borderBottomColor = 'red';
        errorLengthPassword.style.display = 'block';
        return false;
    }

    else if(!passUppercase){
        password.style.borderBottomColor = 'red';
        errorSymb.style.display = 'block';
        return false;
    }

    if (password.value !== passwordConfirm.value){
        password.style.borderBottomColor = 'red';
        passwordConfirm.style.borderBottomColor = 'red';
        errorConfirm.style.display = 'block';
        return false;
    }
    // return true;

    reg_form.style.display = 'none';
    checkEmail.style.display = 'block';
    setTimeout(function(){
        document.getElementById('checkEmail').style.display = 'none';
    },4000);
}

userName.addEventListener('focus', focus);

function focus() {
    if (userName) {
        userName.style.borderBottomColor = 'green';
        errorName.style.display = 'none';
        errorLengthName.style.display = 'none';
    }
}

userName.addEventListener('blur', blur);

function blur() {
    if (!userName.value) {
        userName.style.borderBottomColor = 'gray';
        errorLengthName.style.display = 'none';
    }
}

email.addEventListener('focus', focus_for_email);

function focus_for_email() {
    if (email) {
        email.style.borderBottomColor = 'green';
        errorEmail.style.display = 'none';
        errorInputsEmail.style.display = 'none';
    }
}

email.addEventListener('blur', blur_for_email);

function blur_for_email() {
    if (!email.value) {
        email.style.borderBottomColor = 'gray';
    }
}

password.addEventListener('focus', focus_for_password);

function focus_for_password() {
    if (password) {
        password.style.borderBottomColor = 'green';
        errorPassword.style.display = 'none';
        errorLengthPassword.style.display = 'none';
        errorSymb.style.display = 'none';
    }
}

password.addEventListener('blur', blur_for_password);

function blur_for_password() {
    if (!password.value) {
        password.style.borderBottomColor = 'gray';
    }
}

password_confirm.addEventListener('focus', focus_for_passwordConfirm);

function focus_for_passwordConfirm() {
    if (password_confirm) {
        password_confirm.style.borderBottomColor = 'green';
        password.style.borderBottomColor = 'green';
        errorConfirm.style.display = 'none';
    }
}

password_confirm.addEventListener('blur', blur_for_passwordConfirm);

function blur_for_passwordConfirm() {
    if (!password_confirm.value) {
        password_confirm.style.borderBottomColor = 'gray';
    }
}

function loadInfo() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://reqres.in/api/users", true);
    // xhr.onload = function(){
    //     console.log(xhr.responseText);
    // };
    // xhr.send();

    var data = {
        "name": userName.value,
        "email": email.value
    };

    axios.post("https://reqres.in/api/users", {data})
        .then(response => console.log(response))
        .catch(error => console.log(error))
}
