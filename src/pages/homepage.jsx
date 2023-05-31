import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import menthosa from "../images/menthosa.jpeg" 
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import ap from "../images/Ankitfb.jpg";
import ico from "../images/logo.png"
import INFO from "../data/user";
import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (

		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={ap}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div className="homepage-projects">
							<AllProjects />
						</div>
						<div className="homepage-works">
							<div className="works">
								<div className="card">
									<div className="card-container">
										<div className="card-header">
											<div className="card-icon">
												<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" className="svg-inline--fa fa-briefcase " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path fill="currentColor" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
												</svg>
											</div>
											<div className="card-title">
												Work
											</div>
										</div>
										<div className="card-body">
											<div className="card-text">
												<div className="works-body">
													<div className="work">
														<img src={menthosa} alt="Menthosa Solutions" className="work-image"/><div className="work-title">Menthosa Solutions</div>
															<div className="work-subtitle">Full Stack developer</div>
															<div className="work-duration">2022 - Present</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
		
	);
};

export default Homepage;
