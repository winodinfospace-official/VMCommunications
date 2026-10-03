export default function SectionEyebrow({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "gold";
}) {
  const color = tone === "gold" ? "text-gold" : "text-blue";
  return (
    <p className={`text-xs tracking-[0.3em] mb-4 flex items-center gap-3 ${color}`}>
      <span className="gold-rule" />
      {children}
    </p>
  );
}
