import { CareerResponse, SingleJobResponse } from "@/lib/types/careers/career";

export async function getAllJobsOrAlsoWithSearch(): Promise<CareerResponse> {
  const res = await fetch(
    "https://www.krmangalam.edu.in/careers/wp-json/wp/v2/awsm_job_openings?page=1&per_page=60&_fields=id,slug,title.rendered",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const json: CareerResponse = await res.json();
  return json;
}

export async function getSingleJobBySlug(slug: string = "") {
  const res = await fetch(
    `https://www.krmangalam.edu.in/careers/wp-json/wp/v2/awsm_job_openings?per_page=1&slug=${slug}&_fields=id,content,title,date,slug,class_list`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single jobs");
  const json: SingleJobResponse = await res.json();
  return json;
}
