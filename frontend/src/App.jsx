import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import DebugInfo from "./components/DebugInfo";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<DebugInfo />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
