import { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us — TechPhilo",
  description:
    "Get in touch with the TechPhilo team. Have questions about implementation, partnerships, or course catalogs? We're here to help.",
};

export default function ContactPage() {
  return <Contact />;
}
