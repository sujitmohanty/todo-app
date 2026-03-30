import { useEffect, useState } from 'react';
import { createTask, getTasks } from '@/services/task-service';
import type { Task } from '@/types/task';

export function useTasks(projectId?: number) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!projectId) {
            setTasks([]);

            return;
        }

        loadTasks(projectId);
    }, [projectId]);

    async function loadTasks(id: number) {
        try {
            setLoading(true);
            setError('');

            const data = await getTasks(id);
            setTasks(data);
        } catch {
            setError('Could not fetch tasks');
        } finally {
            setLoading(false);
        }
    }

    async function addTask(title: string) {
        if (!projectId) return null;

        try {
            setError('');

            const newTask = await createTask(projectId, title);
            setTasks((prev) => [newTask, ...prev]);

            return newTask;
        } catch {
            setError('Could not create task');

            return null;
        }
    }

    return {
        tasks,
        loading,
        error,
        addTask,
    };
}
