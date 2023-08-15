document.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key === "s"){
        e.preventDefault();
        if(confirm("Do you want to save?")){
            console.log("saved");
            fetch("/save");
        }else{
            console.log("cancelled")
        }
    }
})