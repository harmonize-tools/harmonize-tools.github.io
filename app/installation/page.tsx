'use client';

import React from 'react';
import {
  CommandLineIcon,
  WindowIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import Data4HealthCoder from './components/Data4HealthCoder';
import Data4HealthNonCoder from './components/Data4HealthNonCoder';
import Socio4HealthCoder from './components/Socio4HealthCoder';
import Socio4HealthNonCoder from './components/Socio4HealthNonCoder';
import Clim4HealthCoder from './components/Clim4HealthCoder';
import Land4HealthCoder from './components/Land4HealthCoder';

const D4H_LOGO = '/cards/toolkits/data4health.svg';
const C4H_LOGO = '/cards/toolkits/clim4health.svg';
const L4H_LOGO = '/cards/toolkits/land4health.svg';
const S4H_LOGO = '/cards/toolkits/socio4health.svg';
const CU4H_LOGO = '/cards/toolkits/cube4health.svg';


type Section = 'data4health' | 'clim4health' | 'land4health' | 'socio4health';

interface CircularButtonProps {
  icon: React.ElementType | string;
  label: string;
  onClick: () => void;
  isImage?: boolean;
  isActive?: boolean;
  size?: 'sm' | 'md';
}

interface SubButtonConfig {
  icon: React.ElementType | string;
  label: string;
  isImage?: boolean;
}

interface SubButtonsProps {
  section: Section;
}

function CircularButton({ icon, label, onClick, isImage = false, isActive = false }: CircularButtonProps) {
  const Icon = icon as React.ElementType; // For when icon is a component
  return (
    <div className="flex flex-col items-center space-y-2 group">
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        className={`cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg rounded-full p-4 w-24 h-24 flex items-center justify-center
          ${isActive 
            ? 'bg-purple-100 shadow-lg scale-105 rotate-3' 
            : 'hover:bg-purple-50 hover:rotate-3'}`}
      >
        {isImage ? (
          <Image 
            src={icon as string} 
            alt={label}
            width={80}
            height={80}
            className={`text-current transform transition-transform duration-300 
              ${isActive ? '-rotate-3' : 'group-hover:-rotate-3'}`}
          />
        ) : (
          // allow passing a simple string (emoji) as icon
          typeof icon === 'string' ? (
            <span className={`text-2xl transition-all duration-300 ${isActive ? 'text-purple-700' : 'text-dark-purple group-hover:text-purple-700'}`}>
              {icon}
            </span>
          ) : (
            <Icon className={`h-12 w-12 transition-all duration-300 
              ${isActive ? 'text-purple-700' : 'text-dark-purple group-hover:text-purple-700'}`} 
            />
          )
        )}
      </div>
      <span className={`text-sm font-medium transition-all duration-300 
        ${isActive ? 'text-purple-700' : 'group-hover:text-purple-700'}`}>
        {label}
      </span>
    </div>
  );
}

interface SubButtonsProps {
  section: Section;
  onButtonClick: (type: 'coder' | 'noncoder') => void;
  activeInstallType: 'coder' | 'noncoder' | null;
}

function SubButtons({ section, onButtonClick, activeInstallType }: SubButtonsProps) {
  const subButtonsConfig: Record<Section, SubButtonConfig[]> = {
    data4health: [
      { icon: CommandLineIcon, label: 'Coders (R)', isImage: false },
      { icon: WindowIcon, label: 'Non-coders', isImage: false }
    ],
    clim4health: [
      { icon: CommandLineIcon, label: 'Coders (R)', isImage: false }
    ],
    land4health: [
      { icon: CommandLineIcon, label: 'Coders (R)', isImage: false }
    ],
    socio4health: [
      { icon: CommandLineIcon, label: 'Coders (Python)', isImage: false },
      { icon: WindowIcon, label: 'Non-coders', isImage: false }
    ]
  } as const;

  const buttons = subButtonsConfig[section];

  return (
    <div>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {buttons.map((btn, index) => {
          const buttonType = btn.label.toLowerCase().includes('non-coders') ? 'noncoder' : 'coder';
          return (
            <div key={index} className="flex flex-col">
              <CircularButton
                icon={btn.icon}
                label={btn.label}
                onClick={() => onButtonClick(buttonType)}
                isImage={btn.isImage}
                isActive={activeInstallType === buttonType}
              />
              {activeInstallType === buttonType && (
                <div className="mt-4">
                  <InstallationContent 
                    section={section} 
                    type={buttonType} 
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface InstallationContentProps {
  section: Section;
  type: 'coder' | 'noncoder';
}

function InstallationContent({ section, type }: InstallationContentProps) {
  const content = {
    data4health: {
      coder: <Data4HealthCoder />,
      noncoder: <Data4HealthNonCoder />
    },
    socio4health: {
      coder: <Socio4HealthCoder />,
      noncoder: <Socio4HealthNonCoder />
    },
    clim4health: {
      coder: <Clim4HealthCoder />,
      noncoder: null
    },
    land4health: {
      coder: <Land4HealthCoder />,
      noncoder: null
    }
  };

  return content[section]?.[type] || null;
}

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [activeInstallType, setActiveInstallType] = useState<'coder' | 'noncoder' | null>(null);

  const handleToolkitClick = (section: Section) => {
    if (section === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      setActiveInstallType(null);
    }
  };

  const handleSubButtonClick = (type: 'coder' | 'noncoder') => {
    setActiveInstallType(activeInstallType === type ? null : type);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">Installation</h1>
      <p className="text-justify text-l text-gray-500">
        Before using our toolkits, ensure you have the necessary software and packages installed. 
        Select your preferred toolkit below to see specific installation instructions for coders and non-coders.
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
      </div>

      {activeSection && (
        <SubButtons 
          section={activeSection} 
          onButtonClick={handleSubButtonClick}
          activeInstallType={activeInstallType}
        />
      )}
    </div>
  );
}
