import { useState, useCallback } from "react";

const STORAGE_KEY = 'cookie_consent';
const EXPIRY_DAYS = 30;

type ConsentStatus = 'accepted' | 'rejected' | null;

interface StoredConsent {
    status: ConsentStatus;
    expiresAt: number;
}

function getStoredConsent(): ConsentStatus | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;

        const parsed: StoredConsent = JSON.parse(raw);
        if (Date.now() > parsed.expiresAt) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return parsed.status;
    } catch {
        return null;
    }
}

function setStoredConsent(status: ConsentStatus): void {
    const expiresAt = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, expiresAt }));
}

export function useCookieConsent() {
    const [consent, setConsent] = useState<ConsentStatus>(() => {
        if (typeof window === "undefined") return null;
        return getStoredConsent();
    });

    const accept = useCallback(() => {
        setStoredConsent('accepted');
        setConsent('accepted');
    }, []);

    const reject = useCallback(() => {
        setStoredConsent('rejected');
        setConsent('rejected');
    }, []);

    return { consent, accept, reject, hasConsented: consent === 'accepted' };
}
