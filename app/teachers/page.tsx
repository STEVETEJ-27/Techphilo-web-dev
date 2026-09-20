import { Metadata } from "next";
import Teachers from "@/views/Teachers";

export const metadata: Metadata = {
  title: "For Teachers & Educators — TechPhilo",
  description:
    "Everything educators need to teach with confidence. Zero-prep lesson plans, teaching tools, gradebook rubrics, and continuous professional development.",
};

export default function TeachersPage() {
  return <Teachers />;
}
