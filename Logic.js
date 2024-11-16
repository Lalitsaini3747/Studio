let scrollcontainer = document.querySelector(".box-container");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});