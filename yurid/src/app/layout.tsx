import "@/styles/globals.css";
import { Cinzel } from "next/font/google";
import NavBubble from "@/components/NavBubble";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "YERID",
  description: "A journal of Jewish thought and reflection.",
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