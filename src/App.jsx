import { Suspense } from "react";
import "./App.css";
import spinner from "../src/assets/spinner.svg";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketList from "./components/TicketList/TicketList";

const fetchTickets = async () => {
    const res = await fetch("/tickets.json");
    return res.json();
};
function App() {
    const ticketPromise = fetchTickets();
    return (
        <>
            <Navbar></Navbar>
            <main className="w-11/12 mx-auto py-14">
                <Banner></Banner>
                <Suspense
                    fallback={
                        <div className="flex justify-center py-10">
                            <img
                                src={spinner}
                                alt="Loading..."
                                className="w-20"
                            />
                        </div>
                    }
                >
                    <TicketList ticketPromise={ticketPromise}></TicketList>
                </Suspense>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
