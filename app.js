const butonClass = document.querySelector(".btn");

butonClass.addEventListener("click",function() {
document.body.style = rastgeleBg();
})
function rastgeleBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}