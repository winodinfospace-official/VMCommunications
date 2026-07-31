export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Campaigns" | "Videos" | "Social Media" | "Publications" | "Case Studies";
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  { slug: "sample-project-1", title: "Public Awareness Campaign — Sample", category: "Campaigns", description: "Dummy placeholder project. Replace with real campaign details and assets." },
  { slug: "sample-project-2", title: "Institutional Corporate Film — Sample", category: "Videos", description: "Dummy placeholder project. Replace with real film details and assets." },
  { slug: "sample-project-3", title: "Social Growth Series — Sample", category: "Social Media", description: "Dummy placeholder project. Replace with real campaign details and assets." },
  { slug: "sample-project-4", title: "Annual Report Design — Sample", category: "Publications", description: "Dummy placeholder project. Replace with real publication details and assets." },
  { slug: "sample-project-5", title: "Behaviour Change Campaign — Sample", category: "Case Studies", description: "Dummy placeholder case study. Replace with real outcomes and assets." },
  { slug: "sample-project-6", title: "Brand Launch Film — Sample", category: "Videos", description: "Dummy placeholder project. Replace with real film details and assets." },
];

export const portfolioCategories = ["All", "Campaigns", "Videos", "Social Media", "Publications", "Case Studies"] as const;
