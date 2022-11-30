import CastCard from "../CastCard/CastCard";
import "./castWrapper.scss";

const CastWrapper = ({ showCast }) => {
	return (
		<>
			<div className="col-12  my-3">
				<h3>Cast</h3>
				<div className="cast-wrapper d-flex gap-3">
					{showCast.map((element, index) => (
						<CastCard cast={element} key={"cast-" + index} />
					))}
				</div>
			</div>
		</>
	);
};

export default CastWrapper;
