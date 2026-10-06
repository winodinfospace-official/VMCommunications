export default function SectionEyebrow({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "gold";
}) {
  const color = tone === "gold" ? "text-gold" : "text-ink/70";
  return (
    <p className={`text-xs font-medium mb-4 flex items-center gap-3 ${color}`}>
      <span className="gold-rule" />
      {children}
    </p>
  );
}
