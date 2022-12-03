import "./app.css";
import { Route, Switch } from "react-router-dom";
import { ApplicationProvider } from "./contexts";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<ApplicationProvider value={{ counter, setCounter }}>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
