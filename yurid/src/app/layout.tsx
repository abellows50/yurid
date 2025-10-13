import "@/styles/globals.css";
import { Cinzel } from "next/font/google";
import NavBubble from "@/components/NavBubble";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "YURID",
  description: "A journal of Jewish thought and reflection.",
};

// ...existing code...
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} bg-white`}>
        <div className="fixed top-4 right-4 z-50">
          <NavBubble />
        </div>
        {children}
      </body>
    </html>
  );
}
// ...existing code...