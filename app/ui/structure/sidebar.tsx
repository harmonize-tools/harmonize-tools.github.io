import LinksList from '@/app/ui/components/links-list';
import AuthorsList from '@/app/ui/components/authors-list';
import BadgesList from '@/app/ui/components/badges-list';

export default function SideBar({
  links,
  licenses,
  citations,
  authors,
  badges,
}: {
  links: any;
  licenses: any;
  citations: any;
  authors: any;
  badges: any;
}) {
  return (
    <div className="md:col-span-1 md:ml-10 md:mt-14 p-4 rounded-lg">
      <h2 className="mb-1 text-l font-medium">Links</h2>
      <LinksList links={links}></LinksList>
      <h2 className="mb-1 text-l font-medium">License</h2>
      <LinksList links={licenses}></LinksList>
      <h2 className="mb-1 text-l font-medium">Citation</h2>
      <LinksList links={citations}></LinksList>
      <h2 className="mb-1 text-l font-medium">Developers</h2>
      <AuthorsList authors={authors}></AuthorsList>
      <h2 className="mb-1 text-l font-medium">Dev status</h2>
      <BadgesList badges={badges}></BadgesList>
    </div>
  );
}
