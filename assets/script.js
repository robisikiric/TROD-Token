// const scrollToTopBtn = document.getElementById("scroll-top");
// scrollToTopBtn.addEventListener("click", () => {
//   window.scroll(0, 0);
// });

const footer = document.querySelector(".footer");
const fixedNav = document.querySelector(".navigation.fixed");

document.addEventListener("DOMContentLoaded", () => {
  initTextMarquee();
});

function initTextMarquee() {
  const marquees = document.querySelectorAll(".flog_text_marquee");

  marquees.forEach((container) => {
    for (let i = 0; i < 50; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add("text");
      item.innerHTML = `<img src="./assets/flog-text.png" alt="" />`;
      container.appendChild(item);
    }
  });
}

let currScroll = 0;
document.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation.fixed");
  if (scrollY < currScroll && !navigation.classList.contains("show")) {
    navigation.classList.add("show");
  }
  const maxScrollPos =
    document.documentElement.offsetHeight -
    document.documentElement.clientHeight;

  if (scrollY > maxScrollPos - window.innerHeight * 0.15) {
    if (!navigation.className.includes("show")) return;
    navigation.classList.remove("show");
  } else {
    if (navigation.className.includes("show")) return;
    navigation.classList.add("show");
  }
  currScroll = window.scrollY;
});
