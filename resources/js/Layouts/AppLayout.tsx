// resources/js/Layouts/AppLayout.tsx

import CookieBanner from "@/components/CookieBanner";
import TrackingScripts from "@/components/TrackingScripts";

export default function AppLayout({ children }) {
    return (
        <>
            {children}

            <CookieBanner />
            <TrackingScripts />
        </>
    );
}
