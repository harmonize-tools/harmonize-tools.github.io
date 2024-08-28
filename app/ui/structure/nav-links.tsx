'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import {
  SunIcon,
  DocumentTextIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

const links = [
  {
    name: 'Toolkits',
    href: '/',
    icon: SunIcon,
  },
  {
    name: 'Tutorials',
    href: '',
    icon: SunIcon,
  },
  {
    name: 'Trainnings',
    href: '',
    icon: DocumentTextIcon,
  },
  {
    name: 'Templates',
    href: '',
    icon: ListBulletIcon,
  },
  {
    name: 'Related products',
    href: '',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'clim4health',
    href: '/clim4health',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Health data tool',
    href: '/health-data-tool',
    icon: HeartIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    // e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      {links.map((link) => {
        let color;
        const href = link.href;
        const LinkIcon = link.icon;
        if (pathname == href) {
          color = 'var(--very-light-purple)';
        } else {
          color = '#f6f6f6';
        }

        // If href is empty show a popup under developing
        return href ? (
          <Link
            key={link.name}
            href={link.href}
            style={{ backgroundColor: `${color}` }}
            className="tab flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-dark-purple md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-8" />
            <p className="hidden text-base md:block">{link.name}</p>
          </Link>
        ) : (
          <div
            key={link.name}
            onClick={handlePopup}
            style={{ backgroundColor: `${color}`, cursor: 'pointer' }}
            className="tab flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-dark-purple md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-8" />
            <p className="hidden text-base md:block">{link.name}</p>
          </div>
        );
      })}

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold">Under Development</h2>
            <p>This section is currently under development. Please check back later.</p>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
