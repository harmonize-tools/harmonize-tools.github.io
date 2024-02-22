'use client';

import ProjectLayout from '@/app/project-layout';

const links = [
  {
    text: 'View on CRAN',
    link: 'https://cloud.r-project.org/web/packages/brclimr/index.html',
  },
  {
    text: 'Report a bug',
    link: 'https://github.com/rfsaldanha/brclimr/',
  },
];

const licenses = [
  {
    text: 'License',
    link: 'https://rfsaldanha.github.io/brclimr/LICENSE.html',
  },
  {
    text: 'MIT',
    link: 'https://opensource.org/license/mit/',
  },
];

const citations = [
  {
    text: 'Citing brclimr',
    link: 'https://rfsaldanha.github.io/brclimr/authors.html#citation',
  },
];

const authors = [
  {
    name: 'Raphael Saldanha',
    position: 'Author, maintainer',
  },
  {
    name: 'Reza Akbarinia',
    position: 'Author',
  },
  {
    name: 'Patrick Valduriez',
    position: 'Author',
  },
  {
    name: 'Marcel Pedroso',
    position: 'Author',
  },
  {
    name: 'Victor Ribeiro',
    position: 'Author',
  },
  {
    name: 'Carlos Cardoso',
    position: 'Author',
  },
  {
    name: 'Eduardo Pena',
    position: 'Author',
  },
  {
    name: 'Fabio Porto',
    position: 'Author',
  },
];

const badges = [
  {
    classname: 'mb-2 w-24',
    src: 'https://www.r-pkg.org/badges/version/brclimr',
    alt: 'CRAN status',
  },
  {
    classname: 'mb-2 w-40',
    src: 'https://cranlogs.r-pkg.org/badges/brclimr',
    alt: 'CRAN status',
  },
  {
    classname: 'w-36',
    src: 'https://github.com/rfsaldanha/brclimr/actions/workflows/R-CMD-check.yaml/badge.svg',
    alt: 'R-CMD-check',
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
        <h1 className="mb-4 text-3xl font-medium">brclimr</h1>
        <p className="mb-3 text-l">
          This R package retrieves zonal statistics from weather indicators that
          were calculated for each municipality in Brazil using data from the
          BR-DWGD and TerraClimate projects. Zonal statistics such as mean,
          maximum, minimum, standard deviation, and sum were computed by taking
          into account the data cells that intersect the boundaries of each
          municipality and stored in Parquet files. This procedure was carried
          out for all Brazilian municipalities, and for all available dates, for
          every indicator available in the weather products (BR-DWGD and
          TerraClimate projects). This package queries on-line the already
          calculated statistics on the Parquet files and returns easy-to-use
          data.frames. Details about the used methodology to calculate the zonal
          statistics are available at Articles &gt; Methodology.
        </p>
        <h2 className="mb-3 text-2xl font-medium">Installation</h2>
        <h3 className="mb-3 text-xl">Stable version</h3>
        <div className="downlit mb-2 mt-2 rounded-lg bg-gray-200 p-2 text-l">
          install.packages("brclimr")
        </div>
        <div className="mb-2 rounded-lg bg-gray-200 p-2 text-l">
          remotes::install_github(repo = "rfsaldanha/brclimr")
        </div>
        <h3 className="mb-3 text-xl">Development version</h3>
        <div className="mb-2 mt-2 rounded-lg bg-gray-200 p-2 text-l">
          remotes::install_github(repo = "rfsaldanha/brclimr", ref = "duckdb")
        </div>
        <p className="mb-3 text-l">
          Note: the stable version adopted a universal solution for querying
          Parquet files that works on all operating systems but it is slower. A
          development version is available for Linux and MacOS with a faster
          solution. More details on this issue.
        </p>
        <h2 className="mb-3 text-2xl font-medium">Example</h2>
        <p className="mb-3 text-l">
          To fetch data for a specific product, indicator and statistic, use the
          fetch_data function. For example: Rio de Janeiro, RJ (IBGE code number
          3304557), data product “brdwgd”, average relative humidity, from
          2010-10-15 to 2010-10-20.
        </p>
      </main>
    </ProjectLayout>
  );
}
