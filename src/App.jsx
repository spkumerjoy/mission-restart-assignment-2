import { Suspense, use, useState } from "react";
import "./App.css";
import spinner from "../src/assets/spinner.svg";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketList from "./components/TicketList/TicketList";
import { ToastContainer } from "react-toastify";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedTask from "./components/ResolvedTask/ResolvedTask";

const fetchTickets = async () => {
    const res = await fetch("/tickets.json");
    return res.json();
};
const ticketPromise = fetchTickets();
function App() {
    const allTickets = use(ticketPromise);

    const [statusTask, setStatusTask] = useState([]);
    const [resolvedTask, setResolvedTask] = useState([]);

    const activeTickets = allTickets.filter(
        (ticket) => !resolvedTask.find((rt) => rt.id === ticket.id),
    );

    return (
        <>
            {/* Navbar-Section */}
            <Navbar></Navbar>
            <main className="w-11/12 mx-auto py-14">
                {/* Banner-Section */}
                <Banner
                    statusTask={statusTask}
                    resolvedTask={resolvedTask}
                ></Banner>

                {/* Task-Lists-Section */}
                <section className="flex flex-col-reverse lg:flex-row py-5 md:py-10 px-4 md:px-0">
                    {/* Left Side-(Customer Tickets Lists) */}
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
                        <TicketList
                            ticketData={activeTickets}
                            statusTask={statusTask}
                            setStatusTask={setStatusTask}
                        ></TicketList>
                    </Suspense>
                    {/* Right Side-(Task Status) */}
                    <div className="w-full lg:w-3/12 px-4 lg:px-0">
                        <div>
                            <h2 className="text-2xl font-bold py-5">
                                Task Status
                            </h2>
                            <TaskStatus
                                resolvedTask={resolvedTask}
                                setResolvedTask={setResolvedTask}
                                statusTask={statusTask}
                                setStatusTask={setStatusTask}
                            ></TaskStatus>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold py-5">
                                Resolved Task
                            </h2>
                            <ResolvedTask
                                resolvedTask={resolvedTask}
                            ></ResolvedTask>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer-Section */}
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
