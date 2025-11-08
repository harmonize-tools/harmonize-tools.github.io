import Link from 'next/link';
import NavLinks from '@/app/ui/structure/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="mt-10 flex h-20 items-end justify-evenly rounded-md"
        href="https://www.harmonize-tools.org/"
      >
        <div className="w-48">
          <img
            src="/harmonize-logo.png"
            className="md:block"
            alt="Harmonize logo"
          ></img>
        </div>
      </Link>
      <div className="mt-5 flex flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
      </div>
    </div>
  );
}
