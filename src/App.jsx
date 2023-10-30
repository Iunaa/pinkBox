import "./Components/_base/_index.scss";
import Header from "./Components/organisms/Header/Header";
import Footer from "./Components/organisms/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Preferences from "./Pages/Preferences";
import Home from "./Home";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} index />
                <Route exact path="/preferences" element={<Preferences />} />
            </Routes>

            <div className="container--grey">
                <Footer />
            </div>
        </div>
    );
}
export default App;
