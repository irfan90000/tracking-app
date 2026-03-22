import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    return (
        <>
            <Head title="Forgot Password" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-md">
                    <div className="mb-8 text-center">
                        <Link href="/">
                            <span className="text-2xl font-bold text-primary">Tracking</span>
                        </Link>
                        <h1 className="mt-4 text-xl font-semibold text-gray-900">
                            Forgot your password?
                        </h1>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="mb-4 text-sm text-gray-600">
                            Enter your email and we'll send you a reset link.
                        </p>
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
                        )}
                        <form onSubmit={(e) => { e.preventDefault(); post(route('password.email')); }}>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <PrimaryButton type="submit" disabled={processing} className="mt-4 w-full">
                                Email Password Reset Link
                            </PrimaryButton>
                        </form>
                        <p className="mt-4 text-center">
                            <Link href={route('login')} className="text-sm text-primary hover:underline">
                                Back to login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}