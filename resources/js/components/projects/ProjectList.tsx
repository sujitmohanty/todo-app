type Project = {
    id: number;
    title: string;
};

type ProjectListProps = {
    projects: Project[];
    selectedProject: Project | null;
    onSelectProject: (project: Project) => void;
};

export default function ProjectList({
    projects,
    selectedProject,
    onSelectProject,
}: ProjectListProps) {
    if (projects.length === 0) {
        return <p className="mt-4 text-sm text-gray-500">No projects yet.</p>;
    }

    return (
        <div className="mt-4 space-y-2">
            {projects.map((project) => (
                <button
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className={`block w-full rounded border px-3 py-2 text-left ${
                        selectedProject?.id === project.id
                            ? 'bg-black text-white'
                            : 'bg-gray-50'
                    }`}
                >
                    {project.title}
                </button>
            ))}
        </div>
    );
}
