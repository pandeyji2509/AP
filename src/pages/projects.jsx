import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Full Stack Developer creating robust web apps.
						</div>

						<div className="subtitle projects-subtitle">
							
Hello! I'm a React specialist and Full Stack Developer. With my deep knowledge and expertise in React, I excel at creating highly interactive and responsive web applications. I have a comprehensive understanding of React's component-based architecture, state management, and popular libraries such as Redux and React Router. By combining my skills in front-end and back-end development, I can deliver seamless user experiences and scalable solutions. Let's work together to bring your React projects to life!
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
