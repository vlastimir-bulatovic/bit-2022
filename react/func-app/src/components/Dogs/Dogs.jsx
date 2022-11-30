import React from "react";

const Dogs = ({ fetchAllData }) => {
	console.log(fetchAllData);
	return (
		<>
			<div className="dogs">
				<h3>Psi</h3>

				{fetchAllData?.message &&
					fetchAllData?.message.map((element, index) => (
						<img
							src={element}
							alt={`Dog-${index}`}
							key={`dog` + index}
							width="10%"
						/>
					))}
			</div>
		</>
	);
};

export default Dogs;
