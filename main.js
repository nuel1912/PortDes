// For Menu...
let menu = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");


let details = document.querySelector("#det");

let start = document.querySelector("#start");
let graphics = document.querySelector("#graphics");
let web = document.querySelector("#web");
let uix = document.querySelector("#uix");

let sta = document.querySelector(".sta");
let gd = document.querySelector("#gd");
let we = document.querySelector("#we");
let ix = document.querySelector("#ix");

// For Graphics sliders...
let dark1 = document.querySelector("#dark1");
let dark2 = document.querySelector("#dark2");
let dark3 = document.querySelector("#dark3");
let banner = document.querySelector("#banner");


// For Web sliders...
let dark4 = document.querySelector("#dark4");
let dark5 = document.querySelector("#dark5");
let dark6 = document.querySelector("#dark6");
let banner2 = document.querySelector("#banner2");


// For each paragraph on Graphics...
let first = document.querySelector("#first");
let first2 = document.querySelector("#first2");
let first3 = document.querySelector("#first3");


// For each paragraph on Web...
let second = document.querySelector("#second");
let second2 = document.querySelector("#second2");
let second3 = document.querySelector("#second3");


// Function for the Menu Icon...
menu.addEventListener("click", function () {
    sidebar.classList.toggle("open");
})



// Start
start.addEventListener("click", function () {
    details.classList.add("sub-container");
    details.classList.remove("add1");
    details.classList.remove("add2");
    details.classList.remove("add3");

    // Commands for when one is active on the Start section...
    start.classList.add("active");
    graphics.classList.remove("active");
    web.classList.remove("active");
    uix.classList.remove("active");

    // gd.style.display = "none";
    sta.classList.add("active");
    sta.classList.add("hide");
    gd.classList.remove("gd");
    we.classList.remove("we");
    ix.classList.remove("ix");
})


// Graphics
graphics.addEventListener("click", function () {
    details.classList.add("add1");
    details.classList.remove("add2");
    details.classList.remove("add3");
    
    // Commands for when one is active on Graphics section...
    graphics.classList.add("active");
    start.classList.remove("active");
    start.classList.remove("act");
    web.classList.remove("active");
    uix.classList.remove("active");

    // Commands to display the contents of Graphics section and hide unrelated parts...
    gd.classList.add("gd");
    sta.classList.remove("active");
    sta.classList.add("hide");
    we.classList.remove("we");
    ix.classList.remove("ix");


    // BUTTONS...
    dark1.addEventListener("click", function () {
        banner.src = "img/GBA.jpg";
        animate();
        dark1.classList.add("light");
        dark2.classList.remove("light");
        dark3.classList.remove("light");

        first.classList.add("f1");
        first2.classList.remove("f2");
        first3.classList.remove("f3");
    })
    
    dark2.addEventListener("click", function () {
        banner.src = "img/Christ 2.jpg";
        animate();
        dark2.classList.add("light");
        dark1.classList.remove("light");
        dark1.classList.remove("dark");
        dark3.classList.remove("light");

        first2.classList.add("f2");
        first.classList.add("hide");
        first.classList.remove("f1");
        first3.classList.remove("f3");
    })
    
    dark3.addEventListener("click", function () {
        banner.src = "img/August hiiii.jpg";
        animate();
        dark3.classList.add("light");
        dark1.classList.remove("light");
        dark1.classList.remove("dark");
        dark2.classList.remove("light");

        first3.classList.add("f3");
        first.classList.add("hide");
        first.classList.remove("f1");
        first2.classList.remove("f2");
    })
})


// Web
web.addEventListener("click", function () {
    details.classList.add("add2");
    details.classList.remove("add1");
    details.classList.remove("add3");

    // Commands for when one is on the Web section...
    web.classList.add("active");
    start.classList.remove("active");
    start.classList.remove("act");
    graphics.classList.remove("active");
    uix.classList.remove("active");

    // Commands to display the contents of Web section and hide unrelated parts...
    we.classList.add("we");
    sta.classList.remove("active");
    sta.classList.add("hide");
    gd.classList.remove("gd");
    ix.classList.remove("ix");


    // BUTTONS...
    dark4.addEventListener("click", function () {
        banner2.src = "img/web1.png";
        dark4.classList.add("light");
        dark5.classList.remove("light");
        dark6.classList.remove("light");

        second.classList.add("s1");
        second2.classList.remove("s2");
        second3.classList.remove("s3");
    })
    
    dark5.addEventListener("click", function () {
        banner2.src = "img/web3.png";
        dark5.classList.add("light");
        dark4.classList.remove("light");
        dark4.classList.remove("dark");
        dark6.classList.remove("light");

        second2.classList.add("s2");
        second.classList.add("hide");
        second.classList.remove("s1")
        second3.classList.remove("s3")
    })
    
    dark6.addEventListener("click", function () {
        banner2.src = "img/web4.png";
        dark6.classList.add("light");
        dark4.classList.remove("light");
        dark4.classList.remove("dark");
        dark5.classList.remove("light");

        second3.classList.add("s3");
        second.classList.add("hide");
        second.classList.remove("s1")
        second2.classList.remove("s2")
    })
})


// UI/UX
uix.addEventListener("click", function () {
    details.classList.add("add3");
    details.classList.remove("add1");
    details.classList.remove("add2");

    // Commands for when one is on the Ui?UX section...
    uix.classList.add("active");
    start.classList.remove("active");
    start.classList.remove("act");
    web.classList.remove("active");
    graphics.classList.remove("active");

    // Commands to display the contents of UI/UX section and hide unrelated parts...    
    ix.classList.add("ix");
    sta.classList.add("hide");
    gd.classList.remove("gd");
    we.classList.remove("we");
})


// Function for the image animation...
function animate() {
    banner.classList.add("zoom");
    setTimeout(() => {
        banner.classList.remove('zoom');
    }, 500);
}