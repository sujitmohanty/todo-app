type Task = {
    id: number;
    title: string;
};

type TaskListProps = {
    tasks: Task[];
    selectedProjectTitle?: string;
};

export default function TaskList({
    tasks,
    selectedProjectTitle,
}: TaskListProps) {
    if (!selectedProjectTitle) {
        return (
            <p className="mt-4 text-sm text-gray-500">
                Select or create a project first.
            </p>
        );
    }

    if (tasks.length === 0) {
        return <p className="mt-4 text-sm text-gray-500">No tasks yet.</p>;
    }

    return (
        <div className="mt-4 space-y-2">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="rounded border bg-gray-50 px-3 py-2"
                >
                    {task.title}
                </div>
            ))}
        </div>
    );
}
