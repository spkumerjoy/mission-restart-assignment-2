import { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const TicketList = ({ ticketPromise, statusTask, setStatusTask }) => {
    const ticketData = use(ticketPromise);
    const handleSelected = (ticketData) => {
        const isAlreadyAdded = statusTask.find((t) => t.id === ticketData.id);

        if (isAlreadyAdded) {
            return toast.warning("Task is already in progress!");
        }
        setStatusTask([...statusTask, ticketData]);
        toast.success("Task Added!");
    };

    return (
        <div className="w-full lg:w-9/12 mr-0 lg:mr-8 px-4 lg:px-0">
            <h2 className="text-2xl font-bold py-5">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                {ticketData.map((ticket) => (
                    <div
                        key={ticket.id}
                        className="card w-full bg-base-100 shadow-lg border border-base-300 cursor-pointer"
                        onClick={() => {
                            handleSelected(ticket);
                        }}
                    >
                        <div className="card-body p-5 gap-3">
                            {/* Title and Status Badge */}
                            <div className="flex justify-between items-start gap-3">
                                <h2 className="card-title text-lg font-bold leading-tight">
                                    {ticket.title}
                                </h2>
                                <div
                                    className={`badge rounded-2xl gap-1 py-4 px-3 ${
                                        ticket.status === "Open"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}
                                >
                                    <span
                                        className={`h-2 w-2 rounded-full ${
                                            ticket.status === "Open"
                                                ? "bg-green-600"
                                                : "bg-yellow-600"
                                        }`}
                                    ></span>
                                    {ticket.status}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-base-content/70 line-clamp-2">
                                {ticket.description}
                            </p>

                            {/* Metadata Row */}
                            <div className="flex items-center justify-between mt-2 pt-3 border-t border-base-200">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-mono text-gray-600">
                                        #{ticket.id}
                                    </span>

                                    {/* Priority Color */}
                                    <span
                                        className={`text-xs font-bold tracking-wide ${
                                            ticket.priority === "HIGH PRIORITY"
                                                ? "text-error"
                                                : ticket.priority ===
                                                    "MEDIUM PRIORITY"
                                                  ? "text-warning"
                                                  : "text-success"
                                        }`}
                                    >
                                        {ticket.priority}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-base-content/80">
                                        {ticket.customer}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <FontAwesomeIcon
                                            icon={faCalendar}
                                            className="text-sm"
                                        />
                                        <span className="font-semibold text-xs">
                                            {ticket.createdAt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketList;
