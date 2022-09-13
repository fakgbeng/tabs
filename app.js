// Selecting DOM ELEMENT

const btnContainer = document.querySelector(".btn-container");
const tabBtn = document.querySelectorAll(".tab-btn");
const contentContainer = document.querySelectorAll(".content-container");
const contents = document.querySelectorAll(".about-content");
let btnArry;
const actTab = function () {
  tabBtn.forEach((el) => el.classList.remove("active"));
};
const allBtns = tabBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    const cur = e.currentTarget;
    const targetEl = cur.dataset.id;

    contents.forEach((sec) => {
      sec.classList.add("hide-content");

      if (sec.getAttribute("id") === targetEl) {
        // console.log(cur);
        actTab();
        cur.classList.add("active");
        sec.classList.toggle("hide-content");
      }
    });
  });
});
