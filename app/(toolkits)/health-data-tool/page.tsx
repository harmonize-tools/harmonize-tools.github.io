'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProjectLayout from '@/app/project-layout';
import Code from '@/app/ui/components/code';


const links = [
  {
    text: '',
    link: '',
  },
];

const licenses = [
  {
    text: '',
    link: '',
  },
];

const citations = [
  {
    text: '',
    link: '',
  },
];

const authors = [
  {
    name: '',
    position: '',
  },
];

const badges = [
  {
    classname: 'mb-1 w-24',
    src: '',
    alt: '',
  },
];

export default function Page({
  params,
}: {
  params: { name: string; description: string };
}) {
  return (
    <ProjectLayout
      links={links}
      licenses={licenses}
      citations={citations}
      authors={authors}
      badges={badges}
    >
      <main>
        <h1>Package name</h1>
        <p>
          Package description
        </p>
      </main>
    </ProjectLayout>
  );
}
