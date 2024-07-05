const img = document.querySelectorAll("img");
const pop = document.querySelector(".pop");
const popimg = document.querySelector("img");

img.forEach(img => (
    img.addEventListener("click", ()=>{
        const src =img.src;
        pop.style.display = "flex";
        popimg.src = src;
    })
));

pop.addEventListener("click", ()=>{
    pop.style.display = "none";
})