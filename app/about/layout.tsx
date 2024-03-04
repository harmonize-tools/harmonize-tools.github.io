import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full flex-none p-6 md:sticky md:top-0 md:h-screen md:w-64">
        <SideNav />
      </aside>
      <div className="w-screen grow p-6 md:p-12 md:p-6">
        <Menu></Menu>
        {children}
      </div>
    </div>
  );
}
