type TaskFormProps = {
    taskTitle: string;
    setTaskTitle: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
};

export default function TaskForm({
    taskTitle,
    setTaskTitle,
    onSubmit,
}: TaskFormProps) {
    return (
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="New task title"
                className="w-full rounded border px-3 py-2"
            />
            <button className="rounded bg-black px-4 py-2 text-white">
                Add
            </button>
        </form>
    );
}
