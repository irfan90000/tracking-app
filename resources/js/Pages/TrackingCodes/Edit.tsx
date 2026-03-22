import { Link, useForm } from "@inertiajs/react";
import InputError from "@/components/InputError";
import PrimaryButton from "@/components/PrimaryButton";
import TrackingCodeFormFields from "@/components/TrackingCodeFormFields";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface TrackingCode {
    id: number;
    name: string;
    script: string;
}

interface Props {
    trackingCode: TrackingCode;
}

export default function Edit({ trackingCode }: Props) {
    const { data, setData, put, errors } = useForm({
        name: trackingCode.name,
        script: trackingCode.script,
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Settings — Edit Tracking Code
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            put(route("tracking-codes.update", { tracking_code: trackingCode.id }));
                        }}
                        className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    >
                        <TrackingCodeFormFields data={data} setData={setData} />
                        {errors.name && (
                            <InputError message={errors.name} />
                        )}
                        {errors.script && (
                            <InputError message={errors.script} />
                        )}
                        <div className="flex gap-2">
                            <PrimaryButton type="submit">
                                Update
                            </PrimaryButton>
                            <Link href={route("tracking-codes.index")}>
                                <button
                                    type="button"
                                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}