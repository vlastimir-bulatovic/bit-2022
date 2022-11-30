import Card from "../../components/Card/Card";
import "./landingPage.scss";

const LandingPage = ({ shows, goToDetailPage }) => {
	return (
		<>
			<div id="landingPage" className="row">
				<div className="col-12">
					<h2 className="text-center">Landing Page</h2>
				</div>

				{shows.map((element) => (
					<Card
						show={element}
						goToDetailPage={goToDetailPage}
						key={"show-" + element.id}
					/>
				))}
			</div>
		</>
	);
};

export default LandingPage;
