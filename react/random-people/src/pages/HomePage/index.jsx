import React, { useContext } from "react";
import { applicationContext } from "../../contexts";

const HomePage = () => {
	const { counter, setCounter } = useContext(applicationContext);

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
			<button onClick={() => setCounter(counter - 1)}>Decrement</button>
		</div>
	);
};

export default HomePage;
