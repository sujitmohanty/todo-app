import AppLayout from '@/layouts/app-layout';

export default function Dashboard() {
    return (
        <AppLayout>
            <div className="mx-auto max-w-6xl p-6">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="mt-2 text-sm text-gray-500">Projects and tasks</p>
            </div>
        </AppLayout>
    );
}
