import api from '@/lib/api';
import type { Project } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
    const res = await api.get('/projects');

    return res.data;
}

export async function createProject(title: string): Promise<Project> {
    const res = await api.post('/projects', { name: title });

    return res.data;
}
