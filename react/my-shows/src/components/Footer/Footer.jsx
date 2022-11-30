import "./footer.scss";

const Footer = () => {
	return (
		<>
			<footer className="py-3">
				<div className="container">
					<nav className="row">
						<div className="col">
							<h3>
								Copyrights &copy; BIT Student{" "}
								{new Date().getFullYear()}
							</h3>
						</div>
					</nav>
				</div>
			</footer>
		</>
	);
};

export default Footer;
