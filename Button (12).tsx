import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "outline-dark";
  className?: string;
};

export default function Button({ href, children, variant = "gold", className = "" }: Props) {
  const base = "inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 tracking-wide transition-colors";

  if (variant === "gold") {
    return (
      <Link href={href} className={`btn-gold bg-gold text-navy ${base} ${className}`}>
        <span>{children}</span>
      </Link>
    );
  }

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`border border-ivory/30 text-ivory hover:bg-ivory/10 ${base} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`border border-ink/25 text-ink hover:bg-ink/5 ${base} ${className}`}
    >
      {children}
    </Link>
  );
}
