import React, { useState } from 'react';

export type OS = 'windows' | 'linux' | 'mac' | null;
const mac_install_img = '/img/mac_install.png';
const mac_signin_img = '/img/mac_signin.png';
const windows_config_img = '/img/windows_config.png';
const windows_download_img = '/img/windows_download.png';

export function OsTabs({ defaultOs, panels }: { defaultOs?: OS; panels: Record<Exclude<OS, null>, React.ReactNode> }) {
  const [active, setActive] = useState<Exclude<OS, null>>(defaultOs ?? 'linux');

  return (
    <div>
      <div className="flex space-x-2 mb-3">
        {(['linux', 'windows', 'mac'] as Exclude<OS, null>[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-3 py-1 rounded-t-md border-b-2 -mb-px text-sm font-medium ${
              active === key ? 'border-blue-600 bg-white' : 'border-transparent bg-gray-100 hover:bg-gray-200'
            }`}
            aria-pressed={active === key}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="border rounded-b-md bg-white p-4">
        {panels[active]}
      </div>
    </div>
  );
}

export function WindowsInstallDocker() {
  return (
    <div>
      <p className="font-semibold">Windows (Docker Desktop)</p>
      <div className="mt-2">
        <ol className="list-decimal pl-6 mt-2">
          <li>
            Install Docker Desktop from: <a className="text-blue-600 underline" href="https://docs.docker.com/desktop/setup/install/windows-install/">https://docs.docker.com/desktop/setup/install/windows-install/</a>
            <ol className="list-lower-alpha pl-6 mt-2">
              <li>
                Click the first link (<strong>Docker Desktop for Windows - x86_64</strong>).
              </li>
            </ol>
            <div className="mt-3">
              <img src={windows_download_img} alt="Docker download page" style={{ width: 682 }} />
            </div>
          </li>

          <li>
            Once downloaded, double click on the Docker Desktop Installer (either in your Downloads folder, or by searching ‘docker’ in the Start Menu).
          </li>

          <li>Click ‘Yes’ to allow the installer to make changes when prompted.</li>

          <li>
            Leave the recommended configuration and select ‘OK’.
            <div className="mt-3">
              <img src={windows_config_img} alt="Docker installer recommended settings" style={{ width: 682 }} />
            </div>
          </li>

          <li>Once the installation has succeeded, click ‘Close’ and then restart your machine.</li>

          <li>After restart, create a folder/directory where you want to save any work (this will be mounted into the container later).</li>

          <li>
            Open Docker Desktop by searching ‘Docker’ in the Windows Start Menu and accept the Service Agreement if prompted. Sign in to Docker Desktop (create a Docker account if you need one).
          </li>

          <li className="mt-2">Quick check: open PowerShell and run <code>docker --version</code> to confirm Docker is available.</li>
        </ol>
      </div>
    </div>
  );
}

export function MacInstallDocker() {
  return (
    <div>
      <p className="font-semibold">MacOS (Docker Desktop)</p>
      <div className="mt-2">
        <ol className="list-decimal pl-6 mt-2">
          <li>
            Install Docker Desktop following the instructions here: <a className="text-blue-600 underline" href="https://docs.docker.com/desktop/setup/install/mac-install/#install-interactively">https://docs.docker.com/desktop/setup/install/mac-install/#install-interactively</a>
            <ol className="list-lower-alpha pl-6 mt-2">
              <li>If you have an M1 or M2 chip, select the “Apple Chip” option. Otherwise select the “Intel Chip” option.</li>
              <li>Double-click the .dmg download file to open it.</li>
              <li>Click and drag the Docker icon to the Applications folder shortcut.</li>
            </ol>
            <div className="mt-3">
              <img src={mac_install_img} alt="Docker mac installer" style={{ width: 682 }} />
            </div>
            <p className="mt-2">When prompted select ‘Use recommended settings’.</p>
          </li>

          <li className="mt-4">
            Once Docker Desktop is installed, accept the terms and conditions and create an account when redirected.
            <div className="mt-3">
              <img src={mac_signin_img} alt="Docker sign in" style={{ width: 710 }} />
            </div>
          </li>

          <li className="mt-4">In your local machine, create a folder where you want to save any outputs from the tutorial.</li>
        </ol>
      </div>
    </div>
  );
}

export function WindowsGet4HealthImage() {
  return (
    <div>
      <div className="mt-2">
        <p className="font-semibold">Option 1 (Docker Desktop user interface - easier):</p>
        <div className="indented mt-2">
          <ol className="list-decimal pl-6 mt-2">
            <li>Return to Docker Desktop and click in the Search bar at the top.</li>
            <li>Search for ‘clim4health’. You should see a Docker image named ‘emilyrball/clim4health-tutorial’</li>
            <li>Click on this, then click ‘Run’.</li>
            <li>
              Under ‘Optional Settings’, enter the following:
              <ol className="list-lower-alpha pl-6 mt-2">
                <li>Host port = 8080</li>
                <li>
                  Under volumes, Host path = <strong>\path\to\windows\dir</strong> where you have replaced <strong>\path\to\windows\dir</strong> with the path to the folder you have made.
                </li>
                <li>Under volumes, Container path = <strong>/home/rstudio/tutorial/output</strong></li>
                <li>Under Environment Variables, Variable = <strong>PASSWORD</strong></li>
                <li>Under Environment Variables, Value = <strong>test</strong></li>
              </ol>
            </li>
            <li className="mt-2">Now click ‘Run’</li>
          </ol>
        </div>

        <p className="mt-4 font-semibold">Option 2 (Powershell):</p>
        <div className="indented mt-2">
          <ol className="list-decimal pl-6 mt-2">
            <li>Open Windows PowerShell by searching ‘powershell’ in the Start Menu.</li>
            <li className="mt-2">In PowerShell, pull the clim4health docker container with the following command:</li>
            <li>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker pull emilyrball/clim4health-tutorial`}</code></pre>
            </li>
            <li className="mt-2">From PowerShell, run the container (all one line):</li>
            <li>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker run -d -p 8080:8787 -e PASSWORD=test -v \\path\\to\\windows\\dir:/home/rstudio/tutorial/output emilyrball/clim4health-tutorial`}</code></pre>
              <p className="mt-2">where you have replaced <code>\path\to\windows\dir</code> with the path to the folder you made earlier.</p>
            </li>
          </ol>
        </div>
      </div>
      <p className="mt-4">You can now follow the instructions for running the tutorial.</p>
    </div>
  );
}

export function MacGet4HealthImage() {
  return (
    <div>
      <div className="mt-2">
        <ol className="list-decimal pl-6 mt-2">
          <li>
            Return to Docker Desktop and click in the Search bar at the top.
            <ol className="list-lower-alpha pl-6 mt-2">
              <li>Search for ‘clim4health’. You should see a Docker image named ‘emilyrball/clim4health-tutorial’</li>
              <li>Click on this, then click ‘Run’.</li>
              <li>
                Under ‘Optional Settings’, enter the following:
                <ol className="list-lower-roman pl-6 mt-2">
                  <li>Host port = 8080</li>
                  <li>Under volumes, Host path = <strong>/path/to/mac/dir</strong> where you have replaced <strong>/path/to/mac/dir</strong> with the path to the folder you made.</li>
                  <li>Under volumes, Container path = <strong>/home/rstudio/tutorial/output</strong></li>
                  <li>Under Environment Variables, Variable = <strong>PASSWORD</strong></li>
                  <li>Under Environment Variables, Value = <strong>test</strong></li>
                </ol>
              </li>
            </ol>
          </li>

          <li className="mt-2">Now click ‘Run’</li>
        </ol>

        <div className="mt-4">
          <p>You can now follow the instructions for running the tutorial.</p>
        </div>
      </div>
    </div>
  );
}

export function LinuxInstallDocker({ showDesktop = true }: { showDesktop?: boolean }) {
  return (
    <div>
      <p className="font-semibold">Option 1 (command line installation):</p>
      <div className="indented mt-2">
        <ol className="list-decimal pl-6">
          <li>
            Install the Docker Engine using the apt repository by following instructions here:{' '}
            <a className="text-blue-600 underline" href="https://docs.docker.com/engine/install/ubuntu/">
              https://docs.docker.com/engine/install/ubuntu/
            </a>
          </li>
          <li className="mt-2">
            If you have used docker before, uninstall old versions by following the instructions in “Uninstall old versions”:{' '}
            <a className="text-blue-600 underline" href="https://docs.docker.com/engine/install/ubuntu/#uninstall-old-versions">
              https://docs.docker.com/engine/install/ubuntu/#uninstall-old-versions
            </a>
          </li>
          <li className="mt-2">
            Install Docker Engine by following steps 1-3 of the section “Install using the apt repository":
            <div className="mt-1">
              <a className="text-blue-600 underline" href="https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository">
                https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository
              </a>
            </div>
          </li>
        </ol>
      </div>

      {showDesktop && (
        <>
          <p className="mt-4 font-semibold">Option 2 (Docker Desktop - not tested):</p>
          <div className="indented mt-2">
            <ol className="list-decimal pl-6">
              <li>
                You could alternatively install Docker Desktop if you prefer to run the container from a User Interface rather than the command line (not tested){' '}
                <a className="text-blue-600 underline" href="https://docs.docker.com/desktop/setup/install/linux/">
                  https://docs.docker.com/desktop/setup/install/linux/
                </a>
              </li>
            </ol>
          </div>
        </>
      )}

      <div className="mt-4">
        <ol className="list-decimal pl-6">
          <li className="mb-3">
            Check Docker has been installed by running in the terminal:
            <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker --version`}</code></pre>
          </li>
          <li className="mb-3">
            Login to docker by running
            <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker login`}</code></pre>
            and creating an account when redirected.
          </li>
          <li>On your local machine, create a folder/directory where you want to save any work.</li>
        </ol>
      </div>
    </div>
  );
}

export function LinuxGet4HealthImage() {
  return (
    <div>
      <p className="font-semibold">Option 1 (in the terminal):</p>
      <ol className="list-decimal pl-6 mt-2">
        <li>
          In the terminal, pull the clim4health docker container with the following command:
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker pull emilyrball/clim4health-tutorial`}</code></pre>
          <p className="mt-2">If that doesn’t work due to permissions try:</p>
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`sudo docker pull emilyrball/clim4health-tutorial`}</code></pre>
        </li>
        <li className="mt-4">
          From the terminal, run the container (all one line):
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`docker run -d -p 8080:8787 -e PASSWORD=test -v ~/path/to/linux/dir:/home/rstudio/tutorial/output emilyrball/clim4health-tutorial`}</code></pre>
          <p className="mt-2">where you have replaced <code>/path/to/linux/dir</code> with the path to the directory you have made in Step 3.</p>
        </li>
      </ol>

      <p className="mt-4 font-semibold">Option 2 (Docker Desktop - not tested):</p>
      <div className="indented mt-2">
        <ol className="list-decimal pl-6">
          <li>
            Return to Docker Desktop and click in the Search bar at the top.
            <ol className="list-lower-alpha pl-6 mt-2">
              <li>Search for ‘clim4health’. You should see a Docker image named ‘emilyrball/clim4health-tutorial’</li>
              <li>Click on this, then click ‘Run’.</li>
              <li>
                Under ‘Optional Settings’, enter the following:
                <ol className="list-lower-roman pl-6 mt-2">
                  <li>Host port = 8080</li>
                  <li>Under volumes, Host path = <strong>/path/to/linux/dir</strong> where you have replaced the path with your folder.</li>
                  <li>Under volumes, Container path = <strong>/home/rstudio/tutorial/output</strong></li>
                  <li>Under Environment Variables, Variable = <strong>PASSWORD</strong></li>
                  <li>Under Environment Variables, Value = <strong>test</strong></li>
                </ol>
              </li>
              <li className="mt-2">Now click ‘Run’</li>
            </ol>
          </li>
        </ol>
      </div>

      <p className="mt-4">You can now follow the instructions for running the tutorial.</p>
    </div>
  );
}
