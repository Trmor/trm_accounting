let height, width, gap;

window.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector(".button");
    gap = parseInt(getComputedStyle(btn.parentElement).gap);
    height = btn.offsetHeight;
    width = btn.offsetWidth;    
    document.querySelectorAll(".button").forEach((node)=>{
        let clicked = false;
        node.addEventListener("click", ()=>{
            node.classList.toggle("expand");
            node.children.item(1).classList.toggle("expand");
        })
        let el = node.querySelector(".money");
        if(el.textContent >= 0){
            el.classList.add('green');
        }else{
            el.classList.add('red');
        }
    })
})
window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key === "s"){
        e.preventDefault();
        if(confirm("Do you want to save?")){
            console.log("saved");
            //fetch("/save");
        }else{
            console.log("cancelled")
        }
    }
})
//in progress
// also bind ctrl+s to fetch save
