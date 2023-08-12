window.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".button").forEach((node)=>{
        node.addEventListener("click", ()=>{
            let id = node.getAttribute("id");
            node.remove();
            fetch('/operation/delete/'+ id).then((resp)=>{
                console.log(resp);
            });
        })
    })
})
//in progress
// change behaviour onclick to expand the tab
// also bind ctrl+s to fetch save
