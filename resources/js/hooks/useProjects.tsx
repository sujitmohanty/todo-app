import { useEffect, useState } from 'react';
import { createProject, getProjects } from '@/services/project-service';
import type { Project } from '@/types/project';

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {
        try {
            setLoading(true);
            setError('');

            const data = await getProjects();
            setProjects(data);

            if (!selectedProject && data.length > 0) {
                setSelectedProject(data[0]);
            }
        } catch {
            setError('Could not fetch projects');
        } finally {
            setLoading(false);
        }
    }

    async function addProject(title: string) {
        try {
            setError('');

            const newProject = await createProject(title);
            setProjects((prev) => [newProject, ...prev]);
            setSelectedProject(newProject);

            return newProject;
        } catch {
            setError('Could not create project');

            return null;
        }
    }

    return {
        projects,
        selectedProject,
        setSelectedProject,
        loading,
        error,
        addProject,
    };
}
