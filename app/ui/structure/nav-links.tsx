'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

const links = [
  {
    name: 'Toolkits',
    href: '/',
    icon: ListBulletIcon,
  },
  {
    name: 'Installation',
    href: '/installation',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Tutorials',
    href: '',
    icon: AcademicCapIcon,
  },
  {
    name: 'Trainings',
    href: '/trainings',
    icon: TrophyIcon,
  },
  {
    name: 'Templates',
    href: '',
    icon: DocumentTextIcon,
  },
  {
    name: 'Related products',
    href: '/related-products',
    icon: UserGroupIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: QuestionMarkCircleIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links
        .filter((link) => link.href) // hide entries with empty href
        .map((link) => {
          let color;
          const href = link.href;
          const LinkIcon = link.icon;
          if (pathname == href) {
            color = 'var(--very-light-purple)';
          } else {
            color = '#f6f6f6';
          }

          return (
            <Link
              key={link.name}
                  href={href}
                  style={{ backgroundColor: `${color}`, color: '#000' }}
                  className="tab flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-l font-light hover:text-black md:flex-none md:justify-start md:p-2 md:px-3 w-full"
            >
                  <LinkIcon className="w-6 h-6 text-black stroke-[1.1]" />
                    <p className="hidden md:block text-l font-light text-black">{link.name}</p>
            </Link>
          );
        })}
    </>
  );
}
