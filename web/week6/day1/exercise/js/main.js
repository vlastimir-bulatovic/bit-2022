const btn = document.querySelector("form > button");

function callback (){
    const password = document.querySelector("label>input").value;
    const confirmPassword = document.querySelector("label:nth-child(2) > input").value;


    if(password !== confirmPassword || password.length <= 8) {
        const errorMessage = document.querySelector(".errorMessage");
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = (password.length <= 8) ? "Oops, password must be longer then 8 char " : "Oops, please confirm your password";
        return;
	} 
    
    location.href ="/success.html";

}
btn.addEventListener("click", callback);

document.addEventListener("keypress", (event) => {
	if (event.key === "Enter") callback();
});



