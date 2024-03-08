import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
        About Harmonize
      </h1>
      <p>
        Extreme climatic events, environmental degradation and socio-economic
        inequalities exacerbate the risk of infectious disease epidemics.
        However, there are significant challenges in obtaining science-based
        evidence to understand and predict the impacts of extreme events and
        landscape changes on disease risk, leaving communities in climate change
        hotspots, vulnerable to increasing health threats. This is partly due to
        a lack of longitudinal and localised data, describing fine-scale
        environmental changes in remote and under-resourced areas, a lack of
        investment and capacity building in data science and software tools, and
        a lack of trained research software engineers and data scientists. The
        HARMONIZE project convenes a transdisciplinary community of
        practitioners, community-based organisations, local governments,
        software engineers and data scientists to address these challenges.
      </p>
      <br></br>
      <p>
        The main goal of the project is to develop cost-effective and
        reproducible digital tools for decision-makers in climate change
        hotspots in Latin America & the Caribbean, including cities, small
        islands, highlands, and the Amazon rainforest. HARMONIZE will collate
        existing multi-source climate, environmental, socio-economic and health
        data, and collect new longitudinal ground-truth data using drone
        technology and low-cost weather sensors, to calibrate and downscale
        coarser-resolution Earth Observation, climate reanalysis and forecast
        datasets in areas most relevant for disease transmission. The HARMONIZE
        digital toolkits will allow local researchers and users, including
        national disease control programs, to link, interrogate and use
        multi-scale spatiotemporal data, to understand the links between
        environmental change and infectious disease risk in their local context,
        and to build robust early warning and response systems in low-resource
        settings.
      </p>
      <br></br>
      <div className="flex items-center justify-center">
        <Image
          src="./harmonize-about-the-project.png"
          width={900}
          height={800}
          alt="About the project"
        ></Image>
      </div>
      <br></br>
      <p>
        At the core of HARMONIZE is the digital infrastructure, which collects
        and post-processes different data streams to create harmonised datasets
        across different spatiotemporal scales and communities of practice.
        Existing datasets, including global Earth observations from satellite
        images and gridded climate reanalysis, and forecast data, will be
        combined with new data collected from drones and weather sensors during
        the project, to improve classification, bias-correction and downscaling
        of existing products. This will be merged with socio-economic,
        demographic and health system data (i.e., census, micro survey, and
        health service data) and disease surveillance data (e.g., case reports
        for dengue, chikungunya, Zika, malaria, leptospirosis, Chagas, etc.)
        collected via online platforms and provided by public health
        practitioners. From this core digital infrastructure, digital toolkits
        will be designed for key decision-makers operating across a range of
        hotspot, including cities, the Amazon rainforest, highland areas, and
        small islands. This new knowledge and technology will have lasting
        benefits for the wider community of practice and generate new evidence
        to design strategies to protect local communities from the adverse
        health impacts of a changing climate.
      </p>
    </main>
  );
}
