const ResolvedTask = ({ resolvedTask }) => {
    return (
        <div>
            {resolvedTask.length > 0 ? (
                resolvedTask.map((completedTask) => (
                    <div
                        key={completedTask.id}
                        className="card w-full bg-sky-200 card-md shadow-lg border border-base-300 mb-5 py-4 px-3"
                    >
                        <div className="card-bod">
                            <h2 className="card-title text-blue-950">
                                {completedTask.title}
                            </h2>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center p-10 border-2 border-dashed border-base-300 rounded-xl text-gray-500">
                    <p>No resolved tasks yet.</p>
                </div>
            )}
        </div>
    );
};

export default ResolvedTask;
