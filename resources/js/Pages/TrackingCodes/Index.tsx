import { Link, router } from "@inertiajs/react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import DangerButton from "@/components/DangerButton";
import Modal from "@/components/Modal";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface TrackingCode {
    id: number;
    name: string;
    script: string;
}

interface Props {
    trackingCodes: TrackingCode[];
}

export default function Index({ trackingCodes }: Props) {
    const [deleteTarget, setDeleteTarget] = useState<TrackingCode | null>(null);

    const confirmDelete = (code: TrackingCode) => setDeleteTarget(code);
    const cancelDelete = () => setDeleteTarget(null);
    const performDelete = () => {
        if (deleteTarget) {
            router.delete(route("tracking-codes.destroy", { tracking_code: deleteTarget.id }), {
                onSuccess: () => setDeleteTarget(null),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Settings — Tracking Codes
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-gray-600">
                                Manage tracking scripts for your customer pages.
                            </p>
                            <a
                                href={route("customer.index")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block text-sm text-primary hover:underline"
                            >
                                View customer page →
                            </a>
                        </div>
                        <Link href={route("tracking-codes.create")}>
                            <PrimaryButton className="inline-flex items-center gap-2">
                                <Plus className="h-4 w-4" />
                                Add Tracking Code
                            </PrimaryButton>
                        </Link>
                    </div>

                    <div className="mt-6 space-y-4">
                        {trackingCodes.length === 0 ? (
                            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
                                <p className="text-gray-500">
                                    No tracking codes yet. Add one to get
                                    started.
                                </p>
                                <Link
                                    href={route("tracking-codes.create")}
                                    className="mt-4 inline-block"
                                >
                                    <PrimaryButton>
                                        Add Tracking Code
                                    </PrimaryButton>
                                </Link>
                            </div>
                        ) : (
                            trackingCodes.map((code) => (
                                <div
                                    key={code.id}
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-gray-900">
                                            {code.name}
                                        </p>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route("tracking-codes.edit", { tracking_code: code.id })}
                                                className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
                                            >
                                                <Pencil className="h-4 w-4" />
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    confirmDelete(code)
                                                }
                                                className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-700 shadow-sm transition hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <Modal show={!!deleteTarget} onClose={cancelDelete}>
                <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                        Delete tracking code?
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                        This will permanently remove &quot;
                        {deleteTarget?.name}&quot;. This action cannot be undone.
                    </p>
                    <div className="mt-6 flex justify-end gap-2">
                        <SecondaryButton onClick={cancelDelete}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton onClick={performDelete}>
                            Delete
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}