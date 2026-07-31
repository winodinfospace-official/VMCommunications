import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = { title: "Blog — Vision Media Communications" };

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Communication, media & IEC insights."
        description="Demo/placeholder articles shown below — not real published content."
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {featured && (
            <Reveal>
              <Link href={`/blog/${featured.slug}`} className="block group mb-16 border border-ink/10 p-8 lg:p-12">
                <p className="text-gold text-xs tracking-[0.25em] mb-4">FEATURED · {featured.category.toUpperCase()}</p>
                <h2 className="font-display text-3xl lg:text-4xl text-ink font-light group-hover:opacity-70 transition-opacity">
                  {featured.title}
                </h2>
                <p className="text-ink/55 text-sm mt-4 max-w-xl">{featured.excerpt}</p>
              </Link>
            </Reveal>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="aspect-[4/3] bg-navy mb-5 flex items-center justify-center">
                    <p className="text-ivory/40 text-[11px] tracking-[0.2em]">ARTICLE IMAGE — PLACEHOLDER</p>
                  </div>
                  <p className="text-gold text-[11px] tracking-[0.2em] mb-2">{post.category.toUpperCase()}</p>
                  <h3 className="font-display text-xl text-ink font-light group-hover:opacity-70 transition-opacity">{post.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
