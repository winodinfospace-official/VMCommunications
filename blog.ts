export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
};

// Demo content — clearly placeholder, not real published articles.
export const blogPosts: BlogPost[] = [
  {
    slug: "sample-post-designing-iec-campaigns",
    title: "[Demo] Designing IEC Campaigns That Actually Change Behaviour",
    category: "IEC & Public Communication",
    excerpt: "Demo article placeholder — replace with a real published piece.",
    content:
      "This is placeholder demo content for the Vision Media Communications blog. Replace this with a real article before launch.",
    date: "2026-01-01",
  },
  {
    slug: "sample-post-brand-voice",
    title: "[Demo] Finding a Brand Voice for Government Communication",
    category: "Branding",
    excerpt: "Demo article placeholder — replace with a real published piece.",
    content:
      "This is placeholder demo content for the Vision Media Communications blog. Replace this with a real article before launch.",
    date: "2026-01-01",
  },
  {
    slug: "sample-post-video-production",
    title: "[Demo] What Goes Into a Corporate Film, Start to Finish",
    category: "Media Production",
    excerpt: "Demo article placeholder — replace with a real published piece.",
    content:
      "This is placeholder demo content for the Vision Media Communications blog. Replace this with a real article before launch.",
    date: "2026-01-01",
  },
];
