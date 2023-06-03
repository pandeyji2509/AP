import { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./app.css";

function App() {


	return (
		<div className="App">
		<Router>
		<Routes>
				<Route path="/AP" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
