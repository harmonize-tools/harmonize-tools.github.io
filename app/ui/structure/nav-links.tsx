'use client';
import { usePathname } from 'next/navigation';
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
    name: 'Tutorials',
    href: '/brclimr',
    icon: SunIcon,
  },
  {
    name: 'Trainnings',
    href: '/dataset-descriptions',
    icon: DocumentTextIcon,
  },
  {
    name: 'Templates',
    href: '/data-sources-list',
    icon: ListBulletIcon,
  },
  {
    name: 'Related products',
    href: '/health-data-questionnaire',
    icon: QuestionMarkCircleIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();
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
        return (
          <Link
            key={link.name}
            href={link.href}
            style={{ backgroundColor: `${color}` }}
            className="tab flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-dark-purple md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-8" />
            <p className="hidden text-base md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
