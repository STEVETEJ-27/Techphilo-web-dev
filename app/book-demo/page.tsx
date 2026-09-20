import { Metadata } from "next";
import BookDemo from "@/views/BookDemo";

export const metadata: Metadata = {
  title: "Book a Demo — TechPhilo",
  description:
    "Schedule an institutional walkthrough with TechPhilo. Discover how our NEP 2020 aligned future-readiness program can elevate your school.",
};

export default function BookDemoPage() {
  return <BookDemo />;
}
