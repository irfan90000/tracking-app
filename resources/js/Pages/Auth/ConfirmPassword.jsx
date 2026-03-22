import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    return (
        <>
            <Head title="Confirm Password" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-md">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h1 className="text-xl font-semibold text-gray-900">Confirm password</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            This is a secure area. Please confirm your password to continue.
                        </p>
                        <form onSubmit={(e) => { e.preventDefault(); post(route('password.confirm'), { onFinish: () => reset('password') }); }} className="mt-4">
                            <div>
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <PrimaryButton type="submit" disabled={processing} className="mt-4">
                                Confirm
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}