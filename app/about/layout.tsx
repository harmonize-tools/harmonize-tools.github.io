import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-6xl mx-auto grow p-6 md:p-12">
        <Menu />
        {children}
      </div>
    </div>
  );
}
