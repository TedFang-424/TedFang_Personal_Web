import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site, siteUrl } from "@/content/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dazheng Ted Fang | Robotics, Systems, and Applied AI",
    template: "%s | Dazheng Ted Fang",
  },
  description:
    "Portfolio website for Dazheng Ted Fang, an engineer building real systems across robotics, production software, and applied AI.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "Dazheng Ted Fang | Robotics, Systems, and Applied AI",
    description:
      "Engineer building real systems across robotics, software, and applied AI.",
    type: "website",
    url: siteUrl ?? undefined,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dazheng Ted Fang | Robotics, Systems, and Applied AI",
    description:
      "Engineer building real systems across robotics, software, and applied AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_right,_rgba(216,124,158,0.12),_transparent_42%),radial-gradient(circle_at_top_left,_rgba(253,238,244,0.9),_transparent_35%)]" />
          <Navbar />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: site.name,
                email: site.email,
                url: siteUrl ?? undefined,
                sameAs: [site.github, site.linkedin].filter(Boolean),
                alumniOf: site.education,
                knowsAbout: [
                  "Robotics",
                  "Real-Time Systems",
                  "Applied AI",
                  "Production Software",
                  "ROS2",
                  "RAG",
                ],
              }),
            }}
          />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
