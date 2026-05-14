import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailAB – A/B Test YouTube Shorts Thumbnails",
  description: "Upload multiple thumbnail options, automatically rotate them for new viewers, and track performance metrics to identify winning designs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="548d9ec4-bc6c-49d6-9b73-d95fc192e765"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
