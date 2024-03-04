import SideNav from '@/app/ui/structure/sidenav';
import SideBar from '@/app/ui/structure/sidebar';
import Menu from '@/app/ui/structure/menu';

export default function ProjectLayout({
  children,
  links,
  licenses,
  citations,
  authors,
  badges,
}: {
  children: React.ReactNode;
  links: any;
  licenses: any;
  citations: any;
  authors: any;
  badges: any;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full flex-none p-6 md:sticky md:top-0 md:h-screen md:w-64">
          <SideNav />
        </aside>
        <div className="w-screen grow p-6 md:p-12 md:p-6">
          <Menu></Menu>
          <div className="grid grid-cols-none md:grid-cols-5">
            <div className="md:col-span-4">{children}</div>
            <SideBar
              links={links}
              licenses={licenses}
              citations={citations}
              authors={authors}
              badges={badges}
            ></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}
