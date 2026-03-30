type ProjectFormProps = {
    projectTitle: string;
    setProjectTitle: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
};

export default function ProjectForm({
    projectTitle,
    setProjectTitle,
    onSubmit,
}: ProjectFormProps) {
    return (
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="New project title"
                className="w-full rounded border px-3 py-2"
            />
            <button className="rounded bg-black px-4 py-2 text-white">
                Add Project
            </button>
        </form>
    );
}
