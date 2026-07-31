export type Client = {
  name: string;
  group: "Government" | "NGO" | "Education" | "Corporate";
};

export const clients: Client[] = [
  { name: "Government Client — Sample A", group: "Government" },
  { name: "Government Client — Sample B", group: "Government" },
  { name: "NGO Partner — Sample A", group: "NGO" },
  { name: "NGO Partner — Sample B", group: "NGO" },
  { name: "Educational Institution — Sample A", group: "Education" },
  { name: "Educational Institution — Sample B", group: "Education" },
  { name: "Corporate Client — Sample A", group: "Corporate" },
  { name: "Corporate Client — Sample B", group: "Corporate" },
];

export const clientGroups = ["Government", "NGO", "Education", "Corporate"] as const;
