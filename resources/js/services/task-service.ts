import api from '@/lib/api';
import type { Task } from '@/types/task';

export async function getTasks(projectId: number): Promise<Task[]> {
    const res = await api.get(`/projects/${projectId}/tasks`);

    return res.data;
}

export async function createTask(
    projectId: number,
    title: string,
): Promise<Task> {
    const res = await api.post(`/projects/${projectId}/tasks`, { title });

    return res.data;
}
