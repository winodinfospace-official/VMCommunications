export type JobOpening = {
  title: string;
  type: string;
  location: string;
};

// Empty by default — real state is "No current openings" per the brief.
// Sample entries left commented for reference on the data shape:
// { title: "Content Writer", type: "Full-time", location: "Bengaluru" }
export const jobOpenings: JobOpening[] = [];
