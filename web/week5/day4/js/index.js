// we can cath our html element in js with methods on document object (.get...);
// this is one of the reasons why we must load our script after html is loaded
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// we can add listener that will watch our element for specific event(click, doubleClick, change, drag, drop, mouseover etc. )
// addEventListener("typeOfEvent", callback);
// this is one of the reasons why we must load our script after html is loaded
btn1.addEventListener('click', () => {
    // we can save values in our local storage in this way .setItem("key", value)
    localStorage.setItem("clicked", btn1.textContent);

    // session storage have all methods that local storage have 
    // difference between this two is that local storage will keep our data even if we close our browser
    // all session storages will be destroyed after browser is closed
    sessionStorage.setItem("sesionClick", btn1.textContent);
    location.href = "./details.html";
})

btn2.addEventListener("click", () => {
	localStorage.setItem("clicked", btn2.textContent);
    location.href = "./details.html";
});