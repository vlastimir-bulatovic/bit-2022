import React from "react";
import "./button.css";

const Button = (props) => {
	return (
		<button onClick={props.setCounter} type="button">
			{props.text}
		</button>
	);
};

export default Button;
