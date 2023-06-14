const scrollBtn = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
export {scrollBtn}