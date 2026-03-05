import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <main className="w-11/12 mx-auto py-14">
                <Banner></Banner>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
