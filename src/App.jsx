import "./App.css";
import Banner from "./components/Banner/Banner";
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
        </>
    );
}

export default App;
