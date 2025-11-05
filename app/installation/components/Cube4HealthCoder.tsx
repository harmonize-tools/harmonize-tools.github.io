type OS = 'windows' | 'linux' | 'mac' | null;

export default function Cube4HealthCoder({ os }: { os?: OS }) {
	const isLinux = os === 'linux';

	return (
		<article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
			<header>
				<h1 className="page-title text-2xl font-extrabold mb-2">cube4health</h1>
				<p className="page-description text-sm text-gray-600 mb-4">Development & installation notes for cube4health (GDAL and Python bindings).</p>
			</header>

			<div className="page-body text-gray-800">
				<p>This guide focuses on installing the native GDAL dependencies and Python bindings required by <strong>cube4health</strong>. The project is primarily developed and tested on Linux; macOS/Windows instructions vary by platform.</p>

				<details className="group mt-4 mb-4 border rounded">
					<summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
						<h2 className="text-lg font-semibold">Development installation (GDAL & headers)</h2>
						<span className="text-gray-600">▸</span>
					</summary>
					<div className="p-4">
						<p className="font-semibold">Linux (Debian/Ubuntu):</p>
						<ol className="list-decimal pl-6 mt-2 space-y-2">
							<li>
								Update packages and upgrade:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`sudo apt-get update && sudo apt-get upgrade`}</code></pre>
							</li>
							<li>
								Install compiler and GDAL dev packages:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`sudo apt-get install -y g++ gdal-bin libgdal-dev`}</code></pre>
							</li>
						</ol>
					</div>
				</details>

				<details className="group mt-4 mb-4 border rounded">
					<summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
						<h2 className="text-lg font-semibold">Python dependencies & numpy-based raster support</h2>
						<span className="text-gray-600">▸</span>
					</summary>
					<div className="p-4">
						<p className="font-semibold">Build steps (Linux):</p>
						<ol className="list-decimal pl-6 mt-2 space-y-2">
							<li>
								Export GDAL variables used during build:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`export GDAL_VERSION=$(gdal-config --version)
export CPLUS_INCLUDE_PATH=/usr/include/gdal
export C_INCLUDE_PATH=/usr/include/gdal`}</code></pre>
							</li>
							<li>
								Upgrade pip, wheel and numpy then install GDAL with numpy support. Pin pip to a version known to work with your toolchain if needed:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`pip3 install --upgrade "pip<=25.2" wheel numpy
pip3 install --use-pep517 --no-build-isolation --no-cache-dir --force-reinstall gdal[numpy]==$(gdal-config --version)`}</code></pre>
								Note: the command uses the installed gdal-config to select the matching wheel/source version.
							</li>
							<li>
								Verify numpy-based raster support has been installed:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`python -c "from osgeo import gdal, gdal_array ; print(gdal.__version__)"`}</code></pre>
								If this raises ImportError, numpy-based raster support wasn't installed correctly — consult the project's issues and GDAL binding docs.
							</li>
						</ol>
					</div>
				</details>

				<details className="group mt-4 mb-4 border rounded">
					<summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
						<h2 className="text-lg font-semibold">Install from source (pip / GitHub)</h2>
						<span className="text-gray-600">▸</span>
					</summary>
					<div className="p-4">
						<p className="mt-2">Install directly from the GitHub repository (recommended for development):</p>
						<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`pip install git+https://github.com/Harmonize-Brazil/cube4health.git`}</code></pre>
						<p className="mt-2">This installs the package from the remote repository. For development where you want to edit the code, use a virtual environment and install in editable mode as shown below.</p>
					</div>
				</details>

				<details className="group mt-4 mb-4 border rounded">
					<summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
						<h2 className="text-lg font-semibold">Alternative: Python virtual environment (development)</h2>
						<span className="text-gray-600">▸</span>
					</summary>
					<div className="p-4">
						<ol className="list-decimal pl-6 mt-2 space-y-2">
							<li>Clone the repository:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`git clone https://github.com/Harmonize-Brazil/cube4health.git`}</code></pre>
							</li>
							<li>Enter the project folder:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`cd cube4health`}</code></pre>
							</li>
							<li>Create a Python 3.10 virtual environment and activate it:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`python3.10 -m venv venv
source venv/bin/activate`}</code></pre>
							</li>
							<li>Run the helper to prepare GDAL bindings and install in development mode:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`./setup_env.sh`}</code></pre>
								This will install the package in development mode so you can iterate on the source without rebuilding.
							</li>
						</ol>
					</div>
				</details>

				<details className="group mt-4 mb-4 border rounded">
					<summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
						<h2 className="text-lg font-semibold">Build the documentation (Sphinx)</h2>
						<span className="text-gray-600">▸</span>
					</summary>
					<div className="p-4">
						<ol className="list-decimal pl-6 mt-2 space-y-2">
							<li>Install documentation dependencies and build tools:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`pip install -e .[docs]`}</code></pre>
							</li>
							<li>Build the HTML docs with Sphinx:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`sphinx-build docs docs/_build/html`}</code></pre>
							</li>
							<li>Open the generated docs in your browser:
								<pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`firefox docs/_build/html/index.html`}</code></pre>
							</li>
						</ol>
					</div>
				</details>

				<p className="mt-4 text-sm text-gray-600">Notes: cube4health depends on native GDAL libraries. If you run into import/build issues, check your system GDAL version, Python version (3.10 recommended for development), and consult the project's GitHub issues for platform-specific fixes.</p>
			</div>
		</article>
	);
}

