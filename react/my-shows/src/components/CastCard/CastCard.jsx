import "./castCard.scss";
const CastCard = ({ cast }) => {
	return (
		<>
			<div className="castCard">
				<div className="card-inner">
					<div className="card-front">
						<figure className="position-relative">
							<img
								className="img-fluid w-100"
								src={cast?.person.image.medium}
								alt={cast?.person.name}
							/>

							<figcaption className="position-absolute">
								{cast?.person.name}
							</figcaption>
						</figure>
					</div>

					<div className="card-back">
						<figure className="position-relative">
							<img
								className="img-fluid w-100"
								src={cast?.character.image.medium}
								alt={cast?.character.name}
							/>

							<figcaption className="position-absolute">
								{cast?.character.name}
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
};

export default CastCard;
