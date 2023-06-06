document
    .getElementById("header_contact_btn")
    .addEventListener("click", function () {
        document.getElementById("contact").style.display = "flex";
        document.getElementById("body").style.overflowY = "hidden";
    });

document
    .getElementById("header__content_cta")
    .addEventListener("click", function () {
        document.getElementById("contact").style.display = "flex";
        document.getElementById("body").style.overflowY = "hidden";
    });
document
    .getElementById("footer_contact")
    .addEventListener("click", function () {
        document.getElementById("contact").style.display = "flex";
        document.getElementById("body").style.overflowY = "hidden";
    });

document
    .getElementById("contact__close_btn")
    .addEventListener("click", function () {
        document.getElementById("contact").style.display = "none";
        box1.style.display = "grid";
        box2.style.display = "none";
        nom.value = "";
        surname.value = "";
        email.value = "";
        message.value = "";
        nom.style.border = "1px solid #fff";
        surname.style.border = "1px solid #fff";
        email.style.border = "1px solid #fff";
        message.style.border = "1px solid #fff";
        document.getElementById("body").style.overflowY = "auto";
    });

document
    .getElementById("contact__confirmation_cta")
    .addEventListener("click", function () {
        document.getElementById("contact").style.display = "none";
        box1.style.display = "grid";
        box2.style.display = "none";
        nom.value = "";
        surname.value = "";
        email.value = "";
        message.value = "";
        nom.style.border = "1px solid #fff";
        surname.style.border = "1px solid #fff";
        email.style.border = "1px solid #fff";
        message.style.border = "1px solid #fff";
        document.getElementById("body").style.overflowY = "auto";
    });

let nom = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let box1 = document.getElementById("contact__container");
let box2 = document.getElementById("contact__confirmation");

function control() {
    console.log(box1);
    console.log(box2);
    if (!nom.value || !surname.value || !email.value || !message.value) {
        if (!nom.value) {
            nom.style.border = "1px solid red";
        } else {
            nom.style.border = "1px solid #fff";
        }
        if (!surname.value) {
            surname.style.border = "1px solid red";
        } else {
            surname.style.border = "1px solid #fff";
        }
        if (!email.value) {
            email.style.border = "1px solid red";
        } else {
            email.style.border = "1px solid #fff";
        }
        if (!message.value) {
            message.style.border = "1px solid red";
        } else {
            nom.style.border = "1px solid #fff";
            surname.style.border = "1px solid #fff";
            email.style.border = "1px solid #fff";
            message.style.border = "1px solid #fff";
        }
        console.log("oops, something wrong");
    } else {
        box1.style.display = "none";
        box2.style.display = "flex";
        console.log("well done");
    }
}

document.getElementById("send").addEventListener("click", function () {
    control();
    console.log("click !");
});

nom.addEventListener("input", function () {
    if (nom.value) {
        nom.style.border = "1px solid #fff";
    } else {
        nom.style.border = "1px solid red";
    }
});

surname.addEventListener("input", function () {
    if (surname.value) {
        surname.style.border = "1px solid #fff";
    } else {
        surname.style.border = "1px solid red";
    }
});
email.addEventListener("input", function () {
    if (email.value) {
        email.style.border = "1px solid #fff";
    } else {
        email.style.border = "1px solid red";
    }
});
message.addEventListener("input", function () {
    if (message.value) {
        message.style.border = "1px solid #fff";
    } else {
        message.style.border = "1px solid red";
    }
});

let burger = document.getElementById("burger_menu");
let navbar = document.getElementById("navbar");
burger.addEventListener("click", function () {
    navbar.classList.toggle("navbar_display");
});

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("paragraph1").classList.toggle("display");
});
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("paragraph2").classList.toggle("display");
});
document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("paragraph3").classList.toggle("display");
});
document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("paragraph4").classList.toggle("display");
});
document.getElementById("btn5").addEventListener("click", function () {
    document.getElementById("paragraph5").classList.toggle("display");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let video = document.getElementById('video');
video.addEventListener("mouseover", function(){
    video.setAttribute("controls")
})
