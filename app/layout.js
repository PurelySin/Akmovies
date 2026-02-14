import "./globals.css";

export const metadata = {
  title: "Ronin Movies - Watch High Quality",
  description: "Free streaming for the community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white">
        {children}
      </body>
    </html>
  );
}
