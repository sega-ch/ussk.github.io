const main = document.querySelector("#main");
const manufact = document.querySelector("#manufact");
const dignity = document.querySelector("#dignity");
const materials = document.querySelector("#materials");
const type = document.querySelector("#type");
const gallery = document.querySelector("#gallery");
const contacts = document.querySelector("#contacts");

main.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".offer").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

manufact.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".production").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

dignity.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".advantages").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

materials.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".materials").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

type.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".types").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

gallery.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".gallery").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

contacts.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".footer").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});
