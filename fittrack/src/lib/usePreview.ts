import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Owner-only preview of draft content. The URL carries the plaintext key
// (?preview=<key>); the bundle only ever contains its SHA-256 hash from
// VITE_PREVIEW_KEY_HASH, so the key itself is not recoverable from the
// public build. Unset env var = preview disabled entirely.
//
// A present ?preview= value is authoritative: a match (re-)grants access
// and a mismatch actively revokes any previously granted session, so a
// wrong key can never ride on a prior successful unlock. Only when the
// URL carries no ?preview= at all do we fall back to the existing
// session grant, so the admin can click around the site without having
// to keep pasting the key on every page.
const STORAGE_KEY = "mpm-preview";

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function usePreview(): boolean {
  const [searchParams] = useSearchParams();
  const candidate = searchParams.get("preview");
  const [enabled, setEnabled] = useState(() =>
    candidate ? false : sessionStorage.getItem(STORAGE_KEY) === "1",
  );

  useEffect(() => {
    if (!candidate) return;

    const expectedHash = import.meta.env.VITE_PREVIEW_KEY_HASH as string | undefined;
    if (!expectedHash) {
      sessionStorage.removeItem(STORAGE_KEY);
      setEnabled(false);
      return;
    }

    let cancelled = false;
    sha256Hex(candidate).then((hex) => {
      if (cancelled) return;
      const match = hex === expectedHash.toLowerCase();
      if (match) {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
      setEnabled(match);
    });
    return () => {
      cancelled = true;
    };
  }, [candidate]);

  return enabled;
}
