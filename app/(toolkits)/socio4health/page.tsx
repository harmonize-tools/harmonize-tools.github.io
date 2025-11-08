'use client';

import path from 'path';
import ProjectLayout from '@/app/project-layout';

const properties_to_check = ['links', 'licenses', 'citations', 'authors', 'badges'];
const repository  = 'socio4health';
const config_data = require(`../../../public/repositories/${repository}/harmonize_readme/config.json`);
const path_html   = path.join('repositories', repository, 'harmonize_readme', 'README.html').replace(/\\/g, '/')

// If the file does not exits create it


// If the labels are empty create it empty
properties_to_check.forEach(property => {
  if (!config_data.hasOwnProperty(property) || !config_data[property] || !Array.isArray(config_data[property])) {
    config_data[property] = [];
  }
});

export default function Page({
  params,
}: {
  params: { name: string; description: string };
}) {
  return (
    <ProjectLayout>
      <iframe src={path_html} width="100%" height="1000"></iframe>
    </ProjectLayout>
  );
}
