import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="hero-bg grain relative pt-44 pb-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal>
          <Link href="/blog" className="text-gold text-xs tracking-[0.2em]">← BACK TO BLOG</Link>
          <p className="text-gold text-xs tracking-[0.35em] mt-8 mb-4">{post.category.toUpperCase()}</p>
          <h1 className="font-display text-ivory text-3xl lg:text-5xl font-light leading-tight">{post.title}</h1>
          <div className="aspect-[16/7] bg-navy border border-ivory/10 mt-10 flex items-center justify-center">
            <p className="text-ivory/40 text-xs tracking-[0.2em]">ARTICLE IMAGE</p>
          </div>
          <p className="text-ivory/65 leading-relaxed mt-10">{post.content}</p>
        </Reveal>
      </div>
    </section>
  );
}
