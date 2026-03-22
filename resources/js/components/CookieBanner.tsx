import { useCookieConsent } from "@/hooks/useCookieConsent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
export default function CookieBanner() {
    const { consent, accept, reject } = useCookieConsent();

    if (consent !== null) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 border-t border-gray-200 bg-white p-4 shadow-lg sm:px-6">
            <p className="text-sm text-gray-600">
                We use cookies for tracking. Choose your preference:
            </p>
            <div className="flex shrink-0 gap-2">
                <SecondaryButton onClick={reject}>Reject all</SecondaryButton>
                <PrimaryButton onClick={accept}>Accept all</PrimaryButton>
            </div>
        </div>
    );
}
