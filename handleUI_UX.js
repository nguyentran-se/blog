// dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.classList.add("darkMode");
        localStorage.setItem("theme", "darkMode");
    } else {
        document.body.classList.remove("darkMode");
        localStorage.setItem("theme", "nothing");
    }
});
const currentTheme = localStorage.getItem("theme");
document.body.classList.add(currentTheme);
if (currentTheme === "darkMode") toggleSwitch.checked = true;

// nav_mobile event
const menuBtn = document.querySelector(".icon-menu");
const menuContent = document.querySelector(".nav-mobile");
const body = document.querySelector("body, html");
const cancelBtn = document.querySelector(".icon-menu-cancel");
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menuContent.classList.toggle("show-menu");
});
menuContent.addEventListener("click", function (e) {
    e.stopPropagation();
});
body.addEventListener("click", function (e) {
    menuContent.classList.remove("show-menu");
});
cancelBtn.addEventListener("click", function () {
    menuContent.classList.remove("show-menu");
});
///Mobile mode btn
const modeBtn = document.querySelector(".change-theme");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
        modeBtn.innerHTML = "Light";
    } else {
        modeBtn.innerHTML = "Dark";
    }
});
// **active nav-item color**
const liItemRights = document.getElementsByClassName("header__navbar-item");
liItemsRightArr = Array.from(liItemRights);
//use localstorage để giữ tài nguyên khi load page

// localStorage.setItem("activeItem", "nothing");
// window.onload = () => {
//     liItemsRightArr.forEach((liItem) => {
//         liItem.classList.remove("active");
//     });
// };
function handleActiveColor() {
    // liItemsRightArr.forEach((liItem) => {
    //     liItem.onclick = (e) => {
    //         // e.preventDefault();
    //         localStorage.setItem("activeItem", liItem.id);
    //         liItemsRightArr.forEach((item) => {
    //             item.classList.remove("active");
    //         });
    //         liItem.classList.add("active");
    //         liItem.style.cursor = "pointer";
    //     };
    // });
    var url = window.location.href;
    liItemsRightArr.forEach((liItem) => {
        itemLink = liItem.querySelector("a");
        if (url === itemLink.href + "/") {
            liItem.classList.add("active");
        } else {
            liItem.classList.remove("active");
        }
    });
}
handleActiveColor();
// var currentActiveItem = localStorage.getItem("activeItem");
// // console.log(currentActiveItem);
// if (currentActiveItem) {
//     var elementAct = document.querySelector(`#${currentActiveItem}`);
//     if (elementAct) {
//         // console.log(elementAct);
//         elementAct.classList.add("active");
//     }
// }

let navRightItem = document.querySelector(".header__navbar-left");
// console.log(navRightItem);
navRightItem.onclick = (e) => {
    liItemsRightArr.forEach((item) => {
        item.classList.remove("active");
    });
    // localStorage.setItem("activeItem", "nothing");
};
