import { useEffect } from "react";

interface TrackingScriptsProps {
    trackingCodes: { id: number; script: string }[];
    hasConsent: boolean;
}

export default function TrackingScripts({
    trackingCodes,
    hasConsent,
}: TrackingScriptsProps) {
    useEffect(() => {
        if (!hasConsent || !trackingCodes?.length) return;

        const scripts: HTMLScriptElement[] = [];

        trackingCodes.forEach((code) => {
            let scriptContent = code.script.trim();
            const scriptMatch = scriptContent.match(
                /<script[^>]*>([\s\S]*?)<\/script>/i
            );
            if (scriptMatch) scriptContent = scriptMatch[1].trim();

            const scriptEl = document.createElement("script");
            scriptEl.textContent = scriptContent;
            document.body.appendChild(scriptEl);
            scripts.push(scriptEl);
        });

        return () => {
            scripts.forEach((s) => s.remove());
        };
    }, [trackingCodes, hasConsent]);

    return null;
}
