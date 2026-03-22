import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { LayoutDashboard, Settings, LogOut, Menu, X } from 'lucide-react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const linkClass = (active) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
            active
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`;

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform lg:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
                    <Link href="/" className="flex items-center" onClick={() => setSidebarOpen(false)}>
                        <ApplicationLogo className="h-8 w-auto fill-current text-primary" />
                        <span className="ml-2 font-semibold text-gray-800">
                            Tracking
                        </span>
                    </Link>
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(false)}
                        className="rounded p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    <Link
                        href={route('tracking-codes.index')}
                        className={linkClass(route().current('tracking-codes.*'))}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        Tracking
                    </Link>
                    <Link
                        href={route('profile.edit')}
                        className={linkClass(route().current('profile.*'))}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <Settings className="h-5 w-5" />
                        Profile
                    </Link>
                </nav>

                <div className="border-t border-gray-200 p-4">
                    <div className="mb-3 px-3 text-xs font-medium text-gray-500">
                        {user.name}
                    </div>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className={`w-full ${linkClass(false)} text-red-600 hover:bg-red-50 hover:text-red-700`}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <LogOut className="h-5 w-5" />
                        Log out
                    </Link>
                </div>
            </aside>

            {/* Mobile header */}
            <div className="fixed top-0 left-0 right-0 z-30 flex h-16 items-center border-b border-gray-200 bg-white px-4 lg:hidden">
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="rounded p-2 text-gray-600 hover:bg-gray-100"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <Link href="/" className="ml-2 font-semibold text-gray-800">Tracking</Link>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col pt-16 lg:pt-0 lg:pl-64">
                {header && (
                    <header className="border-b border-gray-200 bg-white">
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="flex-1">{children}</main>
            </div>

        </div>
    );
}