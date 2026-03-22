import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    return (
        <>
            <Head title="Email Verification" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-md">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h1 className="text-xl font-semibold text-gray-900">Verify your email</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Thanks for signing up! Click the link we emailed you to verify your address.
                            If you didn't receive it, we can send another.
                        </p>
                        {status === 'verification-link-sent' && (
                            <div className="mt-4 text-sm font-medium text-green-600">
                                A new verification link has been sent.
                            </div>
                        )}
                        <form onSubmit={(e) => { e.preventDefault(); post(route('verification.send')); }} className="mt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                Resend Verification Email
                            </PrimaryButton>
                        </form>
                        <p className="mt-4">
                            <Link href={route('logout')} method="post" as="button" className="text-sm text-gray-500 hover:underline">
                                Log out
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}