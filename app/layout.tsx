import type { Metadata } from "next";
import { getProfile } from "@/lib/profile";
import "./globals.css";

const profile = getProfile();

export const metadata: Metadata = {
  title: `${profile.name} | 자기소개`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
