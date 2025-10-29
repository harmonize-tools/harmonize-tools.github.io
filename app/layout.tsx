import '../styles/globals.css';
import SideNav from '@/app/ui/structure/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="flex flex-col md:flex-row">
            <aside className="w-full flex-none p-6 md:sticky md:top-0 md:h-screen md:w-72">
              <SideNav />
            </aside>
            <div className="w-screen grow p-6 md:p-12 md:p-6">
              {children}
            </div>
          </div>
        </main>
      </body>
      <footer>
        <div className="flex h-36 items-center justify-evenly bg-dark-purple text-base text-white">
          <div>© 2024 BSC HARMONIZE All Rights Reserved</div>
        </div>
      </footer>
    </html>
  );
}
