import { useState } from 'react';
import ProjectForm from '@/components/projects/ProjectForm';
import ProjectList from '@/components/projects/ProjectList';
import TaskForm from '@/components/tasks/TaskForm';
import TaskList from '@/components/tasks/TaskList';
import { useProjects } from '@/hooks/useProjects';
import { useTasks } from '@/hooks/useTasks';
import AppLayout from '@/layouts/app-layout';

export default function Dashboard() {
    const [projectTitle, setProjectTitle] = useState('');
    const [taskTitle, setTaskTitle] = useState('');

    const {
        projects,
        selectedProject,
        setSelectedProject,
        error: projectError,
        addProject,
    } = useProjects();

    const { tasks, error: taskError, addTask } = useTasks(selectedProject?.id);

    const error = projectError || taskError;

    async function handleCreateProject(e: React.FormEvent) {
        e.preventDefault();

        if (!projectTitle.trim()) return;

        const created = await addProject(projectTitle);

        if (created) {
            setProjectTitle('');
        }
    }

    async function handleCreateTask(e: React.FormEvent) {
        e.preventDefault();

        if (!taskTitle.trim()) return;

        const created = await addTask(taskTitle);
        if (created) {
            setTaskTitle('');
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

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <section className="rounded-xl border bg-white p-4">
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
                    </section>

                    <section className="rounded-xl border bg-white p-4">
                        <h2 className="text-lg font-medium">
                            {selectedProject
                                ? `Tasks for "${selectedProject.name}"`
                                : 'Tasks'}
                        </h2>

                        <TaskForm
                            taskTitle={taskTitle}
                            setTaskTitle={setTaskTitle}
                            onSubmit={handleCreateTask}
                        />

                        <TaskList
                            tasks={tasks}
                            selectedProjectTitle={selectedProject?.name}
                        />
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
