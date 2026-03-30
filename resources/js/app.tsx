import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ).then((module: any) => {
            const page = module.default;

            page.layout ??= (() => {
                switch (true) {
                    case name === 'welcome':
                        return undefined;
                    case name.startsWith('auth/'):
                        return AuthLayout;
                    case name.startsWith('settings/'):
                        return (page: React.ReactNode) => (
                            <AppLayout>
                                <SettingsLayout>{page}</SettingsLayout>
                            </AppLayout>
                        );
                    default:
                        return AppLayout;
                }
            })();

            return module;
        }),

    setup({ el, App, props }) {
        createRoot(el).render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
            </TooltipProvider>,
        );
    },

    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
