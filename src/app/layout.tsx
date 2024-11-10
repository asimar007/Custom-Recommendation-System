import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-prodiver";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next-Gen Recommendation System",
  description:
    "A powerful and flexible recommendation engine designed to provide personalized suggestions based on user preferences and behavior.",
  openGraph: {
    url: "https://custom-recommendation-system.vercel.app/",
    type: "website",
    title: "Next-Gen Recommendation System",
    description:
      "A powerful and flexible recommendation engine designed to provide personalized suggestions based on user preferences and behavior.",
    images: [
      {
        url: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4//Next-Gen%20Recommendation%20System/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F1dd5f177-81bc-4195-ad64-3e3309df0089.png%3Ftoken%3D6Yeks06FhLPQrYtB1QfJfLjwtoVK0J_aBnRQKIsSYbY%26height%3D715%26width%3D914%26expires%3D33267249042/og.png",
        width: 914,
        height: 715,
        alt: "Dynamic image for Open Graph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asim_ar007",
    title: "Next-Gen Recommendation System",
    description:
      "A powerful and flexible recommendation engine designed to provide personalized suggestions based on user preferences and behavior.",
    images:
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4//Next-Gen%20Recommendation%20System/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F1dd5f177-81bc-4195-ad64-3e3309df0089.png%3Ftoken%3D6Yeks06FhLPQrYtB1QfJfLjwtoVK0J_aBnRQKIsSYbY%26height%3D715%26width%3D914%26expires%3D33267249042/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
