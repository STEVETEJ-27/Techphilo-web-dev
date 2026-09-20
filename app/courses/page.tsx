import { Metadata } from "next";
import Courses from "@/views/Courses";

export const metadata: Metadata = {
  title: "Course Catalog — TechPhilo",
  description:
    "Explore TechPhilo's 6 core course pathways: Coding & Technology, Financial Literacy, Entrepreneurship & Innovation, Communication, Design Thinking, and Leadership.",
};

export default function CoursesPage() {
  return <Courses />;
}
