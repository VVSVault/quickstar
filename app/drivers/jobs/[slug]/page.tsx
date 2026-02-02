import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobDetailContent from "./JobDetailContent";
import { jobs, getJobBySlug } from "@/data/jobs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found | Quickstar Transportation",
    };
  }

  return {
    title: `${job.title} - ${job.region} | Quickstar Transportation`,
    description: job.description,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailContent job={job} />;
}
