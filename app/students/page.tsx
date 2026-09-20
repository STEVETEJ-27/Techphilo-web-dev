import { Metadata } from "next";
import Students from "@/views/Students";

export const metadata: Metadata = {
  title: "For Students & Learners — TechPhilo",
  description:
    "Build real skills, gain confidence, and master your future. Hands-on learning in Coding, AI, Financial Literacy, Entrepreneurship, Design Thinking, and Leadership.",
};

export default function StudentsPage() {
  return <Students />;
}
