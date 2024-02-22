import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-flex-col flex h-full p-6">
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="w-screen md:p-12 md:p-6">
          <Menu></Menu>
          {children}
        </div>
      </div>
    </div>
  );
}
