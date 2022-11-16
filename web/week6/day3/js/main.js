
const mario = document.querySelector("#mario");
const running = "./assets/mario_running.gif";
const standing ="./assets/mario.png"; 
let step = 0;

let isRunning = false;

// catch event when key is pressed
document.addEventListener("keydown", (event) => {
	
	if (event.key === "ArrowRight") {
		// if arrow right
            // move bg left
            // change img to svg
		step -= 30;
		mario.style = `transform: rotateY(0)`;
	} else if (event.key === "ArrowLeft") {
		//if arrow left
		    // rotate svg 180deg
		step += 30;
		mario.style = `transform: rotateY(180deg)`;
	} else if (event.key === "ArrowUp" || event.key === " ") {
		// move img top
        
        document.body.style = `background-position-y: 50px`;
		mario.style.marginBottom = `15%`;
	}

	// move bg right
	    // change img to svg
	if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
		document.body.style = `background-position-x: ${step}px`;
		if (!isRunning) {
			mario.src = running;
			isRunning = true;
		}
	}
});


// catch event when key is released 
    // set image from svg to png
    // set margin bottom to 0

document.addEventListener("keyup", () => {
	document.querySelector("#mario").src = standing;
    mario.style.marginBottom = `0%`;
    isRunning = false;
    document.body.style = `background-position-y: 0px`;
})


