let height, width, gap;
window.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector(".button");
    gap = parseInt(getComputedStyle(btn.parentElement).gap);
    height = btn.offsetHeight;
    width = btn.offsetWidth;    
    document.querySelectorAll(".button").forEach((node)=>{
        node.addEventListener("click", (e)=>{
            e.stopPropagation();
            animation(node)
        })
        node.children.item(2).addEventListener("click", (e)=>{
            e.stopPropagation();
        });
        let el = node.querySelector(".money");
        if(el.textContent >= 0){
            el.classList.add('green');
        }else{
            el.classList.add('red');
        }
    })
    document.querySelector(".container").addEventListener("click",(e)=>{
        document.querySelectorAll(".button.expand").forEach((e)=>{
            animation(e);
        })
    });
})


let animation = (node) =>{
    let money = node.children.item(1).classList;
        let info = node.children.item(2).classList;
        money.add("fade");
        info.add("fade")
        setTimeout(()=>{
            node.classList.toggle("expand");
            money.toggle("expand");
        }, 250)
        setTimeout(()=>{
            info.remove("fade");
            money.remove("fade");
        }, 1000);
}