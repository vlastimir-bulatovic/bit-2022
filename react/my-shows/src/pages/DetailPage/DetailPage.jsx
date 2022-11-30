import { useEffect, useState } from "react";
import CastWrapper from "../../components/CastWrapper/CastWrapper";
import "./detailPage.scss";

const DetailPage = ({ isDetailPage }) => {
	const [show, setShow] = useState({});
	const [showId, setShowId] = useState(localStorage.getItem("currentShow"));
	const [showCast, setShowCast] = useState([]);

	const getShow = () => {
		fetch(`https://api.tvmaze.com/shows/${showId}`)
			.then((res) => res.json())
			.then((data) => setShow(data))
			.catch((error) => console.error(error));
	};

	const getShowCast = () => {
		fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
			.then((res) => res.json())
			.then((data) => setShowCast(data))
			.catch((error) => console.error(error));
	};

	const handleShow = () => {
		getShow();
		getShowCast();
	};

	useEffect(() => {
		handleShow();
	}, []);

	return (
		<>
			<div id="detailPage" className="row">
				<div className="col-5">
					<img
						className="img-fluid"
						src={show?.image?.original}
						alt={show.name}
					/>
				</div>

				<div className="col-6 offset-1 me-auto">
					<h3>{show.name}</h3>
					<div className="pt-4">
						{show.genres?.length &&
							show.genres.map((element, index) => (
								<span
									className="badge rounded-pill me-3 py-2 px-3"
									key={"genre-" + index}
								>
									{element}
								</span>
							))}
					</div>

					<p className="pt-3">
						<b>{show?.name}</b>
						{show?.summary &&
							show.summary
								.replace(/(<([^>]+)>)/gi, "")
								.replace(show?.name, "")}
					</p>
				</div>

				<CastWrapper showCast={showCast} />
			</div>
		</>
	);
};

export default DetailPage;
