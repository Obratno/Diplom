import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import ContactsPage from "./components/ContactsPage";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<div className="wrapper">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/contacts" element={<ContactsPage />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
