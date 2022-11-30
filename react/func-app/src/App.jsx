import React, { useState, useEffect } from "react";
import "./app.css";
import Button from "./components/Button/Button";
import Button2Class from "./components/Button2Class/Button2Class";

const App = () => {
	const dogApi = "https://dog.ceo/api/breed/hound/images";

	const [counter, setCounter] = useState(0);
	const [fetchedData, setFetchedData] = useState({});
	const [fetchAllData, setFetchAllData] = useState({});

	// use effect we can use as a life circle methods (mount, update, unmount)
	useEffect(() => {
		fetch("https://api.kanye.rest/")
			.then((res) => res.json())
			.then((data) => setFetchedData(data))
			.catch((error) => console.log(error));

		// dependency array is array of our states that we want our effect to watch
		// if some of elements are updated then this effect will be executed again (same as componentDidUpdated)
		// if dependency array is empty useEffect will be executed only when component is rendered (same as componentDidMount)
	}, [counter]);

	useEffect(() => {
		fetch(dogApi)
			.then((res) => res.json())
			.then((data) => setFetchAllData(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div className="counter-wrapper">
				<h1>Counter: {counter}</h1>

				<Button
					setCounter={() => setCounter(counter + 1)}
					text="Increment"
				/>

				<Button
					setCounter={() => setCounter(counter - 1)}
					text="Decrement"
				/>

				<Button setCounter={() => setCounter(0)} text="Reset" />

				<Button
					setCounter={() =>
						setCounter(Math.floor(Math.random() * 100))
					}
					text="Randomize"
				/>

				<Button2Class
					setCounter={() =>
						setCounter(Math.floor(Math.random() * 100))
					}
					text="Button Class Randomize"
				/>

				<blockquote>
					<q>{fetchedData?.quote}</q>
				</blockquote>
			</div>
		</>
	);
};

export default App;
