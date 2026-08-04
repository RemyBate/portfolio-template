export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-violet-700">{title}</h2>
      <div className="mt-3 space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalDraftNotice({ text }: { text: string }) {
  return (
    <div className="rounded-xl border-l-4 border-violet-600 bg-violet-50 px-4 py-3">
      <p className="text-gray-800 leading-relaxed text-sm">{text}</p>
    </div>
  );
}
