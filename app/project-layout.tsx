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
    <div className="min-flex-col flex h-full p-6">
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="md:p-12 md:p-6">
          <Menu></Menu>
          <div className="grid grid-cols-none md:grid-cols-4">
            <div className="md:col-span-3">
              {children}
            </div>
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
    </div>
    </>
  )
}
