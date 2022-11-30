import "./card.scss";

const Card = ({ show, goToDetailPage }) => {
	return (
		<>
			<div
				className="col-3  my-3"
				onClick={() => {
					localStorage.setItem("currentShow", show.id);
					goToDetailPage();
				}}
			>
				<div
					className={`card ${
						show?.rating.average > 8.5 ? "card-gold" : ""
					}`}
				>
					<picture>
						<img
							className="img-fluid w-100"
							src={show.image?.medium}
							alt={show.name}
							loading="lazy"
						/>
					</picture>

					<div className="position-relative p-3">
						<p className="mb-0">{show.name}</p>
						<span className="position-absolute rating">
							{show.rating.average}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
