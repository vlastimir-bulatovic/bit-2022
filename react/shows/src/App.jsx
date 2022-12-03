import { useState, useEffect } from "react";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";

import { LANDING_PAGE, ABOUT_PAGE, DETAIL_PAGE } from "./constants";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Loading from "./components/Loading";
import { Route, Switch } from "react-router";

function App() {
	const [shows, setShows] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch("http://api.tvmaze.com/shows")
			.then((res) => res.json())
			.then((data) =>
				data.sort((a, b) => b.rating.average - a.rating.average)
			)
			.then((sortedData) => setShows(sortedData))
			.catch((error) => console.log(error))
			.finally(() =>
				setTimeout(() => {
					setIsLoading(false);
				}, 1500)
			);
	}, []);

	return (
		<>
			<Header />

			<main>
				{isLoading ? (
					<Loading />
				) : (
					<Switch>
						<Route exact path="/">
							<LandingPage shows={shows} />
						</Route>

						<Route path="/about">
							<AboutPage />
						</Route>

						<Route path="/details">
							<DetailPage setIsLoading={setIsLoading} />
						</Route>
					</Switch>
				)}
			</main>

			<Footer />
		</>
	);
}

export default App;
