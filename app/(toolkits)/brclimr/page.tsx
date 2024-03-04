'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProjectLayout from '@/app/project-layout';
import Code from '@/app/ui/components/code';

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
          BR-DWGD and TerraClimate projects.
        </p>
        <p className="mb-3 text-l">
          Zonal statistics such as mean, maximum, minimum, standard deviation,
          and sum were computed by taking into account the data cells that
          intersect the boundaries of each municipality and stored in Parquet
          files. This procedure was carried out for all Brazilian
          municipalities, and for all available dates, for every indicator
          available in the weather products (BR-DWGD and TerraClimate projects).
          This package queries on-line the already calculated statistics on the
          Parquet files and returns easy-to-use data.frames.
        </p>
        <p className="mb-3 text-l">
          Details about the used methodology to calculate the zonal statistics
          are available at Articles &gt; Methodology.
        </p>
        <h2 className="mb-3 text-2xl font-medium">Installation</h2>
        <h3 className="mb-3 text-xl font-medium">Stable version</h3>
        <Code language="r" text={`install.packages("brclimr")`}></Code>
        <Code
          language="r"
          text={`remotes::install_github(repo = "rfsaldanha/brclimr")`}
        ></Code>
        <h3 className="mb-3 text-xl font-medium">Development version</h3>
        <Code
          language="r"
          text={`remotes::install_github(repo = "rfsaldanha/brclimr", ref = "duckdb")`}
        ></Code>
        <p className="mb-3 text-l">
          Note: the stable version adopted a universal solution for querying
          Parquet files that works on all operating systems but it is slower. A
          development version is available for Linux and MacOS with a faster
          solution. More details on this{' '}
          <Link href="https://github.com/rfsaldanha/brclimr/issues/1">
            issue
          </Link>
          .
        </p>
        <h2 className="mb-3 text-2xl font-medium">Example</h2>
        <p className="mb-3 text-l">
          To fetch data for a specific product, indicator and statistic, use the
          fetch_data function. For example: Rio de Janeiro, RJ (IBGE code number
          3304557), data product “brdwgd”, average relative humidity, from
          2010-10-15 to 2010-10-20.
        </p>
        <Code
          language="r"
          text={`library(brclimr) 
fetch_data( 
  code_muni = 3304557, 
  product = "brdwgd",
  indicator = "rh", statistics = "mean", date_start =
  as.Date("2010-10-15"), date_end = as.Date("2010-10-20") )
#> # A tibble: 6 × 2
#>   date       value
#>   <date>     <dbl>
#> 1 2010-10-15  74.5
#> 2 2010-10-16  73.5
#> 3 2010-10-17  77.8
#> 4 2010-10-18  90.1
#> 5 2010-10-19  74.3
#> 6 2010-10-20  71.5`}
        ></Code>
        <p className="mb-3 text-l">
          If you need to query several municipalities, indicators and zonal
          statistics, we recommend to download and locally query the parquet
          files using the arrow package. A list of URLs of the parquet files
          created for this project is available at Articles &gt; Parquet files.
        </p>
        <p className="mb-3 text-l">
          A list with the indicators and zonal statistics available by product
          can be retrieved with the function product_info.
        </p>
        <Code
          language="r"
          text={`product_info("brdwgd")
product_info("terraclimate")`}
        ></Code>
        <h2 className="mb-3 text-2xl font-medium">Another example</h2>
        <p className="mb-3 text-l">
          To fetch data for a specific product, indicator and statistic, use the
          fetch_data function. For example: Rio de Janeiro, RJ (IBGE code number
          3304557), data product “brdwgd”, average relative humidity, from
          2010-10-15 to 2010-10-20.
        </p>
        <Code
          language="r"
          text={`tmax <- fetch_data(
  code_muni = 3303401,
  product = "brdwgd",
  indicator = "tmax",
  statistics = "mean",
  date_start = as.Date("2010-01-01"),
  date_end = as.Date("2012-01-01")
)

tmin <- fetch_data(
  code_muni = 3303401,
  product = "brdwgd",
  indicator = "tmin",
  statistics = "mean",
  date_start = as.Date("2010-01-01"),
  date_end = as.Date("2012-01-01")
)

pr <- fetch_data(
  code_muni = 3303401,
  product = "brdwgd",
  indicator = "pr",
  statistics = "sum",
  date_start = as.Date("2010-01-01"),
  date_end = as.Date("2012-01-01")
)

tmax$name <- "Tmax_avg"
tmin$name <- "Tmin_avg"`}
        ></Code>
        <Code
          language="r"
          text={`library(ggplot2)
ggplot(data = rbind(tmax, tmin), aes(x = date, y = value, color = name)) +
  geom_line() +
  scale_x_date(date_breaks = "2 months", date_labels =  "%m/%y") +
  ylim(0, NA) +
  labs(
    title = "Nova Friburgo, RJ",
    x = "Date", 
    y = "Temperature (average)",
    color = ""
  ) +
  theme_bw() +
  theme(legend.position = "bottom", legend.direction = "horizontal")`}
        ></Code>
        <div className="flex items-center justify-center">
          <Image
            src="/toolkits/brclimr/nova-friburgo-temperature-example.png"
            width={900}
            height={800}
            alt="Nova Friburgo temperature example"
          ></Image>
        </div>
        <Code
          language="r"
          text={`ggplot(data = pr, aes(x = date, y = value)) +
  geom_line(color = "blue") +
  scale_x_date(date_breaks = "2 months", date_labels =  "%m/%y") +
  ylim(0, NA) +
  labs(
    title = "Nova Friburgo, RJ",
    x = "Date", 
    y = "Precipitation (sum)",
    color = ""
  ) +
  theme_bw() +
  theme(legend.position = "bottom", legend.direction = "horizontal")`}
        ></Code>
        <div className="flex items-center justify-center">
          <Image
            src="/toolkits/brclimr/nova-friburgo-precipitation-example.png"
            width={900}
            height={800}
            alt="Nova Friburgo precipitation example"
          ></Image>
        </div>
      </main>
    </ProjectLayout>
  );
}
