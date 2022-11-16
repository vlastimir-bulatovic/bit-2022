
function counterClosure() {
	var i = 0;

	return function (type) {
		return type !== "-" ? ++i : --i;
	};
}

function buttonsEvents() {
    
    const box = document.createElement("div");

    const output = document.createElement("h1");
    output.innerText = 0;
    box.append(output);

    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Increment";
    box.append(btnAdd);

    const btnSub = document.createElement("button");
	btnSub.textContent = "Decrease";
	box.append(btnSub);

    document.body.append(box);

    var counter = counterClosure();

	btnAdd.addEventListener("click", (even) => {
		output.innerText = counter("+");
	});
    btnSub.addEventListener("click", (even) => {
		output.innerText = counter("-");
	});
}



buttonsEvents();
buttonsEvents();
buttonsEvents();
