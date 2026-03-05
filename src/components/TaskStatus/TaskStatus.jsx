import { toast } from "react-toastify";

const TaskStatus = ({
    resolvedTask,
    setResolvedTask,
    statusTask,
    setStatusTask,
}) => {
    const handleResolved = (resolvedTicketData) => {
        setResolvedTask([...resolvedTask, resolvedTicketData]);

        const remainingTasks = statusTask.filter(
            (task) => task.id !== resolvedTicketData.id,
        );

        setStatusTask(remainingTasks);

        toast.success("Task Resolved!");
    };
    return (
        <div>
            {statusTask.length > 0 ? (
                statusTask.map((selectedTask) => (
                    <div
                        key={selectedTask.id}
                        className="card w-full bg-base-100 card-md shadow-lg border border-base-300 mb-5"
                    >
                        <div className="card-body">
                            <h2 className="card-title">{selectedTask.title}</h2>
                            <div className="justify-end card-actions">
                                <button
                                    onClick={() => {
                                        handleResolved(selectedTask);
                                    }}
                                    className="btn bg-green-600 text-base font-semibold text-white btn-block"
                                >
                                    Complete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center p-10 border-2 border-dashed border-base-300 rounded-xl text-gray-500">
                    <p>Select a ticket to add to Task Status.</p>
                </div>
            )}
        </div>
    );
};

export default TaskStatus;
