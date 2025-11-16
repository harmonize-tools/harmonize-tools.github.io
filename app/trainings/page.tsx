'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CircularButton from '../ui/components/circular-button';
import DownloadButton from '../ui/components/download-button';

const D4H_LOGO = '/cards/toolkits/data4health.svg';
const C4H_LOGO = '/cards/toolkits/clim4health.svg';
const L4H_LOGO = '/cards/toolkits/land4health.svg';
const S4H_LOGO = '/cards/toolkits/socio4health.svg';
const CU4H_LOGO = '/cards/toolkits/cube4health.svg';


type Section = 'data4health' | 'clim4health' | 'land4health' | 'socio4health' | 'cube4health';

interface CircularButtonProps {
  icon: React.ElementType | string;
  label: string;
  onClick: () => void;
  isImage?: boolean;
  isActive?: boolean;
  size?: 'sm' | 'md';
}


function SubButtons({ section }: { section: Section }) {
  const resources: Record<Section, { pdf?: string; related: Array<{ label: string; href: string; isFile?: boolean }> }> = {
    data4health: {
      pdf: '/training/data4health-training.pdf',
      related: [
        //{ label: 'Quickstart (download)', href: '/cards/toolkits/data4health-quickstart.zip', isFile: true },
        //{ label: 'Online docs', href: 'https://example.org/data4health' },
      ],
    },
    clim4health: {
      pdf: '/training/clim4health-training.pdf',
      related: [
        { label: 'Clim4Health training files', href: '/training/clim4health_for_website.zip', isFile: true, useButton: true },
      ],
    },
    land4health: {
      pdf: '/cards/toolkits/land4health-installation.pdf',
      related: [
        { label: 'Land4Health dataset', href: '/cards/toolkits/land4health-dataset.zip', isFile: true },
        { label: 'Documentation', href: 'https://example.org/land4health' },
      ],
    },
    socio4health: {
      pdf: '/cards/toolkits/socio4health-installation.pdf',
      related: [
        { label: 'Socio4Health notes (download)', href: '/cards/toolkits/socio4health-notes.pdf', isFile: true },
        { label: 'Website', href: 'https://example.org/socio4health' },
      ],
    },
    cube4health: {
      pdf: '/training/cube4health-training.pdf',
      related: [
        //{ label: 'Cube4Health examples', href: '/cards/toolkits/cube4health-examples.zip', isFile: true },
        //{ label: 'Repo', href: 'https://example.org/cube4health' },
      ],
    },
  };

  const entry = resources[section];

  return (
    <article className="prose mx-auto mt-8 w-full max-w-4xl">
      <h2 className="text-2xl font-semibold">Installation & resources</h2>
      <p className="text-gray-600">Embedded installation guide and related materials for <strong>{section}</strong>.</p>

      {entry?.pdf ? (
        <div className="mt-6 border rounded overflow-hidden" style={{ height: 720 }}>
          {/* The iframe/embed will show the PDF. If the PDF isn't present, users
              can use the link below to open/download it. */}
          <iframe
            src={entry.pdf}
            title={`${section} installation guide`}
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">No PDF guide available for this toolkit.</p>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-medium">Related materials</h3>
        <ul className="mt-3 list-disc list-inside">
          {entry.related.map((r, i) => (
            <li key={i} className="my-2">
              {r.useButton && r.isFile ? (
                <DownloadButton href={r.href} label={r.label} />
              ) : (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:underline"
                  {...(r.isFile ? { download: '' } : {})}
                >
                  {r.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}


export default function Page() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const handleToolkitClick = (section: Section) => {
    if (section === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">Installation</h1>
      <p className="text-justify text-l text-gray-500">
        Before using our toolkits, ensure you have the necessary software and packages installed.
        Select a toolkit below to view the installation guide and related materials.
      </p>
      
      <div className="mb-8 mt-6 flex flex-wrap justify-center gap-8">
        <CircularButton
          icon={D4H_LOGO}
          label="data4Health"
          onClick={() => handleToolkitClick('data4health')}
          isImage={true}
          isActive={activeSection === 'data4health'}
        />
        <CircularButton
          icon={C4H_LOGO}
          label="clim4health"
          onClick={() => handleToolkitClick('clim4health')}
          isImage={true}
          isActive={activeSection === 'clim4health'}
        />
        <CircularButton
          icon={L4H_LOGO}
          label="land4health"
          onClick={() => handleToolkitClick('land4health')}
          isImage={true}
          isActive={activeSection === 'land4health'}
        />
        <CircularButton
          icon={S4H_LOGO}
          label="socio4health"
          onClick={() => handleToolkitClick('socio4health')}
          isImage={true}
          isActive={activeSection === 'socio4health'}
        />
        <CircularButton
          icon={CU4H_LOGO}
          label="cube4health"
          onClick={() => handleToolkitClick('cube4health')}
          isImage={true}
          isActive={activeSection === 'cube4health'}
        />
      </div>

      {activeSection && (
        <SubButtons section={activeSection} />
      )}
    </div>
  );
}
