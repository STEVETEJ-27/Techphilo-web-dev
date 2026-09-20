import { Metadata } from "next";
import Schools from "@/views/Schools";

export const metadata: Metadata = {
  title: "For Schools & Institutions — TechPhilo",
  description:
    "One integrated future-readiness program for schools — NEP 2020 aligned, ready-to-implement curriculum, Explorer Passport, teacher support, and Grand Expo showcase.",
};

export default function SchoolsPage() {
  return <Schools />;
}
