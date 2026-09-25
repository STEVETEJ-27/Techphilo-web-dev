import type { Metadata } from "next";
import { Chakra_Petch, Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

// Chakra Petch — angular, futuristic tech display font
// Sharp geometry with a premium sci-fi edge; perfect for EdTech headings & CTAs
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Plus Jakarta Sans — premium humanist sans for body text, labels, and UI
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// JetBrains Mono — developer-grade monospace for code, data labels & tech accents
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Outfit — stylish, vibrant, modern student-tech font
const outfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-student",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TechPhilo — One Ecosystem. Infinite Potential.",
  description:
    "TechPhilo is a future-readiness ecosystem for schools and students. Six integrated programs — Coding & Technology, Financial Literacy, Entrepreneurship, Communication, Design Thinking and Leadership — delivered in partnership with schools across India.",
  keywords: [
    "TechPhilo",
    "EdTech",
    "Future-Ready Schools",
    "Coding for Students",
    "Financial Literacy Program",
    "Entrepreneurship Education",
    "Design Thinking for Schools",
    "School Programs India",
    "NEP 2020 Aligned",
    "Partner With Schools",
    "Student Programs",
    "STEM Learning",
  ],
  openGraph: {
    title: "TechPhilo — One Ecosystem. Infinite Potential.",
    description:
      "One integrated future-readiness ecosystem — built for schools, designed around students. Six programs. Real skills. Lasting impact.",
    type: "website",
  },
  icons: {
    icon: "/TPlogo01.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${outfitFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(el) {
                    if (!el || !el.attributes) return;
                    for (var i = el.attributes.length - 1; i >= 0; i--) {
                      var attr = el.attributes[i].name;
                      if (attr === 'bis_skin_checked' || attr === 'bis_register' || attr.indexOf('__processed') === 0) {
                        el.removeAttribute(attr);
                      }
                    }
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        clean(m.target);
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node.nodeType === 1) {
                            clean(node);
                            var children = node.querySelectorAll('*');
                            for (var k = 0; k < children.length; k++) {
                              clean(children[k]);
                            }
                          }
                        }
                      }
                    }
                  });
                  // attributeFilter is essential: without it every inline-style
                  // write by Framer Motion (many per animation frame) queues a
                  // mutation record and runs this callback before paint.
                  observer.observe(document, {
                    attributes: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register'],
                    childList: true,
                    subtree: true
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <div className="noise-overlay" aria-hidden="true" suppressHydrationWarning />
          <Navbar />
          <main id="main-content" style={{ minHeight: "80vh" }} suppressHydrationWarning>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
