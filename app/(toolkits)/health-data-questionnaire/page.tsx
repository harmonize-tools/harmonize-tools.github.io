'use client';

import ProjectLayout from '@/app/project-layout';

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
        <h1 className="mb-4 text-3xl font-medium">Package name</h1>
        <p className="mb-3 text-l">
          Package description
        </p>
      </main>
    </ProjectLayout>
  );
}