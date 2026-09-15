import type { Metadata } from "next";
import { Chakra_Petch, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "TechPhilo — Empowering the Next Generation of Tech Leaders",
  description:
    "A multi-page premium EdTech SaaS platform equipping schools, teachers, and students with AI, Coding, Robotics, and futuristic STEM learning ecosystems.",
  keywords: [
    "TechPhilo",
    "EdTech",
    "AI Education",
    "STEM Learning",
    "Coding for Kids",
    "School Curriculum",
  ],
  openGraph: {
    title: "TechPhilo — Empowering the Next Generation of Tech Leaders",
    description:
      "Transforming education through AI, Coding, and Robotics programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
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
          <div className="noise-overlay" aria-hidden="true" suppressHydrationWarning />
          <Navbar />
          <main style={{ minHeight: "80vh" }} suppressHydrationWarning>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
