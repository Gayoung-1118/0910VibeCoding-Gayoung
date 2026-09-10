import type { Metadata } from "next";
import { Gowun_Batang, Instrument_Serif } from "next/font/google";
import { getProfile } from "@/lib/profile";
import "./globals.css";

// 제목·인용용 한글 명조. 한글 글꼴은 파일이 여러 조각이라 preload는 끈다.
const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--font-gowun-batang",
});

// 섹션 번호와 이탤릭 라벨용 영문 세리프
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const profile = getProfile();

export const metadata: Metadata = {
  title: `${profile.name} | 자기소개`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* Pretendard는 Google Fonts에 없어서 CDN 스타일시트로 불러온다 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
