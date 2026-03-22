import { Head } from "@inertiajs/react";
import CookieBanner from "@/components/CookieBanner";
import TrackingScripts from "@/components/TrackingScripts";
import { useCookieConsent } from "@/hooks/useCookieConsent";

interface Props {
    trackingCodes: { id: number; name: string; script: string }[];
    pageOwnerId: number | null;
}

export default function CustomerIndex({ trackingCodes, pageOwnerId }: Props) {
    const { hasConsented } = useCookieConsent();

    return (
        <>
            <Head title="Customer" />
            <div className="min-h-screen bg-gray-50">
                <div className="mx-auto max-w-4xl px-4 py-12">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Customer Page
                    </h1>
                    <p className="mt-2 text-gray-600">
                        This is a customer-facing page. If you accept cookies,
                        tracking scripts will run.
                    </p>
                </div>
            </div>

            <TrackingScripts
                trackingCodes={trackingCodes ?? []}
                hasConsent={hasConsented}
            />
            <CookieBanner />
        </>
    );
}
