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