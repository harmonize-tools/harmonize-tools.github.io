import Link from 'next/link';

export default function LinksList({ links }: { links: any }) {
  return (
    <>
      {links.map((link: any) => {
        return (
          <div key={link.id} className="mb-2">
            <Link href={link.link}>{link.text}</Link>
          </div>
        );
      })}
    </>
  );
}
