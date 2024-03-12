import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex min-h-screen flex-col items-center justify-between p-24">{children}</body>
    </html>
  );
}
