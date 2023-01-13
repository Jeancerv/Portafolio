const menu = document.querySelector(".back")
const bx = document.querySelector(".bx-menu")
const links = document.querySelectorAll(".back a")



bx.addEventListener("click", function(){
    menu.classList.toggle("back_2")
})

links.forEach((link) => {
    link.addEventListener("click", function (){
        menu.classList.toggle("back_2")
    })

    })
