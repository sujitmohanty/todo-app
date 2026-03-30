import { useEffect, useState } from 'react';
import ProjectForm from '@/components/projects/ProjectForm';
import ProjectList from '@/components/projects/ProjectList';
import AppLayout from '@/layouts/app-layout';
import api from '@/lib/api';

type Project = {
    id: number;
    title: string;
};

export default function Dashboard() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [projectTitle, setProjectTitle] = useState('');
    const [error, setError] = useState('');

    async function fetchProjects() {
        try {
            const res = await api.get('/projects');
            setProjects(res.data);

            if (res.data.length > 0) {
                setSelectedProject(res.data[0]);
            }
        } catch {
            setError('Could not fetch projects');
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    async function handleCreateProject(e: React.FormEvent) {
        e.preventDefault();

        if (!projectTitle.trim()) return;

        try {
            const res = await api.post('/projects', {
                title: projectTitle,
            });

            const newProject = res.data;
            setProjects((prev) => [newProject, ...prev]);
            setSelectedProject(newProject);
            setProjectTitle('');
            setError('');
        } catch {
            setError('Could not create project');
        }
    }

    return (
        <AppLayout>
            <div className="mx-auto max-w-6xl p-6">
                <h1 className="text-2xl font-semibold">Dashboard</h1>

                {error && (
                    <div className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                <div className="mt-6 rounded-xl border bg-white p-4">
                    <h2 className="text-lg font-medium">Projects</h2>

                    <ProjectForm
                        projectTitle={projectTitle}
                        setProjectTitle={setProjectTitle}
                        onSubmit={handleCreateProject}
                    />

                    <ProjectList
                        projects={projects}
                        selectedProject={selectedProject}
                        onSelectProject={setSelectedProject}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
