import '@/app/ui/global.css';
import SideNav from '@/app/ui/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>
        <div className='h-36 bg-dark-purple text-white text-base flex justify-evenly items-center'>
          <div>© 2024 BSC HARMONIZE All Rights Reserved</div>
        </div>
      </footer>
    </html>
  );
}
