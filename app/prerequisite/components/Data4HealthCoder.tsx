import { OsTabs, WindowsInstallDocker, MacInstallDocker, WindowsGet4HealthImage, MacGet4HealthImage, LinuxInstallDocker, LinuxGet4HealthImage } from './OsTabs';

type OS = 'windows' | 'linux' | 'mac' | null;

export default function Data4HealthCoder({ os }: { os?: OS }) {
  const isLinux = os === 'linux';

  return (
    <article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <header>
        <h1 className="page-title text-2xl font-extrabold mb-2">data4health</h1>
        <p className="page-description text-sm text-gray-600 mb-4"></p>
      </header>

      <div className="page-body text-gray-800">

        <p>This is a guide to installing Docker and running a docker container, which we will need to run the clim4health and data4health tutorials.</p>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Install Docker</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <OsTabs
              defaultOs={isLinux ? 'linux' : undefined}
              panels={{
                linux: <LinuxInstallDocker showDesktop={true} />,
                windows: <WindowsInstallDocker />,
                mac: <MacInstallDocker />,
              }}
            />
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Get the tutorial docker image</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <OsTabs
              defaultOs={isLinux ? 'linux' : undefined}
              panels={{
                linux: <LinuxGet4HealthImage />,
                windows: <WindowsGet4HealthImage />,
                mac: <MacGet4HealthImage />,
              }}
            />
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Running the clim4health docker container</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>
                Once you have followed instructions to <a className="text-blue-600 underline" href="#get-tutorial-docker-image">pull the Docker image</a>, open a web browser and go to <a className="text-blue-600 underline" href="http://localhost:8080/">http://localhost:8080/</a>
              </li>
              <li>
                Login using the credentials <strong>Username=rstudio</strong> and <strong>Password=test</strong>.
                <ol className="list-lower-alpha pl-6 mt-2">
                  <li>
                    If you are using the command line or Powershell, you can change the password you want to use in the <strong>run</strong> command in the <a className="text-blue-600 underline" href="#get-tutorial-docker-image">previous steps</a>.
                  </li>
                  <li>
                    If you are using Docker Desktop, you can change the password by entering Value = my_alternative_password in the environment variables field in the <a className="text-blue-600 underline" href="#get-tutorial-docker-image">previous steps</a>.
                  </li>
                </ol>
              </li>
              <li>You should now be running rstudio server with the correct environment to use clim4health or data4health.</li>
            </ol>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">clim4health instructions</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Click into the ‘clim4health_tutorial’ folder in the bottom-right of the page, and you should see tutorial files labelled 00_install_clim4health.Rmd, etc.</li>
              <li>
                For this training session, please follow <strong>full_example_workflow.Rmd</strong>.
                <ol className="list-lower-alpha pl-6 mt-2">
                  <li>Click on this file to open it. In case it does not open in Visual mode, click on ‘Visual’ in the top left to switch from ‘Source’ to ‘Visual’.</li>
                  <li>More detailed instructions for the individual functions are available in the numbered tutorials.</li>
                </ol>
              </li>
              <li>If you would like to save any files (either that you create or that you edit), make sure to copy/save them into the folder ‘clim4health_tutorial/output’, which is where you linked to your local directory.</li>
            </ol>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Stopping and restarting the Docker container</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <p className="mt-2"><span role="img" aria-label="warning">⚠️</span> Make sure you save anything you want to keep in the ‘clim4health_tutorial/output/’ folder because when you stop and restart a Docker container, it will reset and you will lose any changes you made!</p>

            <p className="mt-2"><strong>Option 1 (command line or Powershell):</strong></p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>
                When you are done, you can stop the docker container by running:
                <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`docker stop $(docker ps -q)`}</code></pre>
                which will stop all running containers.
              </li>
              <li>
                Ensure you have the most up-to-date version of the image by running the <strong>pull</strong> command again:
                <div className="mt-2">
                  <pre className="bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`docker pull emilyrball:clim4health_tutorial`}</code></pre>
                </div>
              </li>
              <li>
                To run a new version of the container:
                <ol className="list-lower-alpha pl-6 mt-2">
                  <li>
                    Re-run the <strong>run</strong> command of the previous instructions, which starts:
                    <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-text">{`docker run -d -p 8080:8787 -e PASSWORD=test ...`}</code></pre>
                    (Note that if you do not stop the container before re-running this command you will get an error saying something like <em>8080 failed: port is already allocated</em>)
                  </li>
                </ol>
              </li>
            </ol>

            <p className="mt-2"><strong>Option 2 (Docker Desktop):</strong></p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Open Docker Desktop</li>
              <li>To stop a container, click on ‘Containers’ in the menu on the left and select the blue ‘Stop’ icon on the container you wish to stop.</li>
              <li>
                Ensure you have the most up-to-date version of the image:
                <ol className="list-lower-alpha pl-6 mt-2">
                  <li>Click on ‘Images’ in the menu on the left</li>
                  <li>Under the image of ‘emilyrball/clim4health-tutorials’, click on the three dots on the left (if you hover over them, it should say ‘Show image actions’)</li>
                  <li>Select ‘Pull’ - this will download the most recent version of the image, in case it has been updated in the meantime.</li>
                </ol>
              </li>
              <li>Return to ‘Containers’ from the menu on the left, select the container and click Start. This should remember your settings (password, file path etc.) that you entered before.</li>
            </ol>
          </div>
        </details>
      </div>
    </article>
  );
}
