import '@/app/ui/style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>
        <div className="flex h-36 items-center justify-evenly bg-dark-purple text-base text-white">
          <div>© 2024 BSC HARMONIZE All Rights Reserved</div>
        </div>
      </footer>
    </html>
  );
}
