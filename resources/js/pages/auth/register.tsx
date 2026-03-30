import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <>
            <Head title="Register" />

            <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                        Create your account
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Start organizing your projects and tasks in one place.
                    </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/95 p-6 shadow-sm sm:p-8">
                    <Form
                        {...store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-5">
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-sm font-medium"
                                        >
                                            Full name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="h-11"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-sm font-medium"
                                        >
                                            Email address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="h-11"
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="password"
                                            className="text-sm font-medium"
                                        >
                                            Password
                                        </Label>
                                        <PasswordInput
                                            id="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Create a password"
                                            className="h-11"
                                        />
                                        <InputError
                                            message={errors.password}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="password_confirmation"
                                            className="text-sm font-medium"
                                        >
                                            Confirm password
                                        </Label>
                                        <PasswordInput
                                            id="password_confirmation"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Repeat your password"
                                            className="h-11"
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-1"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 h-11 w-full rounded-xl"
                                        tabIndex={5}
                                        data-test="register-user-button"
                                        disabled={processing}
                                    >
                                        {processing && <Spinner />}
                                        Create account
                                    </Button>
                                </div>

                                <div className="border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
                                    Already have an account?{' '}
                                    <TextLink
                                        href={login()}
                                        tabIndex={6}
                                        className="font-medium"
                                    >
                                        Log in
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
};
