import { useState, useEffect } from "react";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import LandingPage from "./pages/LandingPage/LandingPage";

import { DETAIL_PAGE, ABOUT_PAGE, LANDING_PAGE } from "./constants";

const App = () => {
	const [shows, setShows] = useState([]);
	const [currenPage, setCurrentPage] = useState(LANDING_PAGE);

	useEffect(() => {
		setCurrentPage(
			localStorage.getItem("currentPage")
				? localStorage.getItem("currentPage")
				: LANDING_PAGE
		);

		fetch("https://api.tvmaze.com/shows")
			.then((res) => res.json())
			.then((data) => handleShows(data))
			.catch((error) => console.error(error));
	}, []);

	const handleShows = (data) => {
		data.sort((a, b) => b.rating.average - a.rating.average);
		setShows(data.splice(0, 48));
	};

	return (
		<>
			<Header
				goToLandingPage={() => {
					setCurrentPage(LANDING_PAGE);
					localStorage.setItem("currentPage", LANDING_PAGE);
				}}
				goToAboutPage={() => {
					setCurrentPage(ABOUT_PAGE);
					localStorage.setItem("currentPage", ABOUT_PAGE);
				}}
			/>

			<main>
				<section className="container">
					{currenPage === LANDING_PAGE && (
						<LandingPage
							shows={shows}
							goToDetailPage={() => {
								setCurrentPage(DETAIL_PAGE);
								localStorage.setItem(
									"currentPage",
									DETAIL_PAGE
								);
							}}
						/>
					)}

					{currenPage === ABOUT_PAGE && <AboutPage />}
					{currenPage === DETAIL_PAGE && <DetailPage />}
				</section>
			</main>

			<Footer />
		</>
	);
};

export default App;
