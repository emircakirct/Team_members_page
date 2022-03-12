let change = document.getElementById("switch");

change.addEventListener("change", () =>{
    let element = document.querySelector(".main-container")
    element.classList.toggle("dark-mode")
})

