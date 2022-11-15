const img = document.querySelector("img");
const btn = document.querySelector("button");

document.addEventListener("click", (event) => {
    img.style.top = event.clientY-25 + "px"; 
    img.style.left = event.clientX -25+ "px";
})

btn.addEventListener("click",(event)=>{
    // stop all deeper events in bubbling!!
    event.stopPropagation();

    img.style.top = "10px";
	img.style.left = "10px";
})

