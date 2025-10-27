import "@/styles/globals.css";
import { Cinzel } from "next/font/google";
import NavBubble from "@/components/NavBubble";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "the YARID",
  description: "the YARID is a collegiate gathering of Jewish culture in journal form.",
  keywords: "Harvard Hillel, Center for Jewish Studies, Harvard, Jewish culture, pluralism, the YARID, YARID, yerid, YARID at harvard, Harvard Yarid, Jewish journal, journal, student journal, college journal, Jewish thought, Jewish future, Jewish ideas",
  authors: [{ name: "The Yarid Editorial Team"}],
  creator: "The Yarid",
  publisher: "Harvard Hillel",
  openGraph: {
    title: "the YARID",
    description: "the YARID is a collegiate gathering of Jewish culture in journal form.",
    url: "https://theyarid.org",
    siteName: "the YARID",
    images: [
      {
        url: "https://theyarid.org/og.png",
        width: 1200,
        height: 630,
        alt: "the YARID Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


// ...existing code...
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
// ...existing code...