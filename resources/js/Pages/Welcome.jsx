import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col bg-gray-50">
                <header className="border-b border-gray-200 bg-white">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Link href="/" className="flex items-center">
                            <ApplicationLogo className="h-10 w-auto fill-current text-primary" />
                            <span className="ml-2 text-xl font-semibold text-gray-800">
                                Tracking
                            </span>
                        </Link>
                        <nav className="flex items-center gap-4">
                            {auth?.user ? (
                                <Link
                                    href={route('tracking-codes.index')}
                                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Track with confidence
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-600">
                            Manage your tracking scripts and respect visitor
                            privacy. Add analytics, pixels, and custom scripts
                            that run only when users accept cookies.
                        </p>
                        {!auth?.user && (
                            <div className="mt-8 flex justify-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover"
                                >
                                    Get started
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}