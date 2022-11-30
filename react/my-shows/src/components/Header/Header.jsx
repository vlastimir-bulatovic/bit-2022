import "./header.scss";

const Header = ({ goToAboutPage, goToLandingPage }) => {
	return (
		<>
			<header className="py-3">
				<div className="container">
					<nav className="row">
						<div className="col">
							<h3
								className="d-inline-block"
								onClick={goToLandingPage}
							>
								BIT Shows
							</h3>
						</div>

						<div className="col text-end">
							<h3
								className=" d-inline-block"
								onClick={goToAboutPage}
							>
								About
							</h3>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
