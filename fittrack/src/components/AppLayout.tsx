import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-ink/10 px-4 py-8 text-center text-xs text-ink-soft sm:px-6">
        © {new Date().getFullYear()} MPM™ — Malovec Performance Method. All rights reserved.
      </footer>
    </div>
  );
}
