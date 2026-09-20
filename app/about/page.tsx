import { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us — TechPhilo",
  description:
    "Learn about TechPhilo's mission to bridge the gap between traditional education and future-readiness across India.",
};

export default function AboutPage() {
  return <About />;
}
