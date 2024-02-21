import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="flex h-20 items-end justify-evenly rounded-md mt-10"
        href="/"
      >
        <div className="w-48">
          <img src="/harmonize-logo.png" className="md:block" alt="Harmonize logo"></img>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 mt-5">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
