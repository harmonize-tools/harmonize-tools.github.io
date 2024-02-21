"use client";

import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { name: string, description: string } }) {
    const pathname = usePathname();
    return <main>
      <h1 className="text-3xl font-medium mb-4">brclimr</h1>
      <p className="text-l mb-3">
        This R package retrieves zonal statistics from weather indicators that were calculated 
        for each municipality in Brazil using data from the BR-DWGD and TerraClimate projects.
        Zonal statistics such as mean, maximum, minimum, standard deviation, and sum were computed 
        by taking into account the data cells that intersect the boundaries of each municipality 
        and stored in Parquet files. This procedure was carried out for all Brazilian 
        municipalities, and for all available dates, for every indicator available in the weather 
        products (BR-DWGD and TerraClimate projects). This package queries on-line the already 
        calculated statistics on the Parquet files and returns easy-to-use data.frames.
        Details about the used methodology to calculate the zonal statistics are available at 
        Articles &gt; Methodology.
      </p>
      <h2 className="text-2xl font-medium mb-3">Installation</h2>
      <h3 className="text-xl mb-3">Stable version</h3>
      <div className="text-l bg-gray-200 p-2 rounded-lg mt-2 mb-2 downlit">install.packages("brclimr")</div>
      <div className="text-l bg-gray-200 p-2 rounded-lg mb-2">remotes::install_github(repo = "rfsaldanha/brclimr")</div>
      <h3 className="text-xl mb-3">Development version</h3>
      <div className="text-l bg-gray-200 p-2 rounded-lg mt-2 mb-2">remotes::install_github(repo = "rfsaldanha/brclimr", ref = "duckdb")</div>
      <p>
        Note: the stable version adopted a universal solution for querying Parquet files that works on 
        all operating systems but it is slower. A development version is available for Linux and MacOS 
        with a faster solution. More details on this issue.
      </p>
      <h2 className="text-2xl font-medium mb-3">Example</h2>
      <p>
        To fetch data for a specific product, indicator and statistic, use the fetch_data function. 
        For example: Rio de Janeiro, RJ (IBGE code number 3304557), 
        data product “brdwgd”, average relative humidity, from 2010-10-15 to 2010-10-20.
      </p>

    </main>
  }
