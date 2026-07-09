export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold">MPM™</p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-sm text-ink-soft">This page is coming soon.</p>
    </div>
  );
}
