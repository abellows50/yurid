import "@/styles/globals.css";

export const metadata = {
  title: "YURID",
  description: "A journal of Jewish thought and reflection.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}