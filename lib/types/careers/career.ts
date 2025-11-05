export type CareerResponse = CareerJobs[];

export type CareerJobs = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
};
