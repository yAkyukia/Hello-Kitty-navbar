const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
})