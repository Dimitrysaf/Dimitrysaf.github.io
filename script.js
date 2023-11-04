const nav = document.querySelector(".nav"),
  SearchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

  SearchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if(nav.classList.contains("openSearch")){
    return    SearchIcon.classList.replace("uil-search", "uil-times");
    }
    SearchIcon.classList.replace("uil-times", "uil-search");
  });

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    SearchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});