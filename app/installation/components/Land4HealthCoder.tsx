export default function Land4HealthCoder() {
  return (
    <article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <header>
        <h1 className="page-title text-2xl font-extrabold mb-2">land4health</h1>
        <p>Quick reference guide for prerequisites and installation methods of <code>land4health</code> for R users and developers.</p>
      </header>

      <div className="page-body text-gray-800">
        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Prerequisites</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li><strong>R:</strong> R 4.0 or higher is recommended</li>
              <li><strong>pak (optional):</strong> Helpful for installing development versions from GitHub</li>
              <li><strong>rgee and sf:</strong> core packages used by <code>land4health</code> (will be attached automatically)</li>
            </ul>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Install CRAN version</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <p className="mt-2 text-gray-700">Install the released CRAN version:</p>
            <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-r">{`install.packages("land4health")`}</code></pre>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Install development version (GitHub)</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <p className="mt-2 text-gray-700">Use <code>pak</code> to install the development version from GitHub:</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-r">{`# install pak if you don\'t have it
install.packages("pak")

# install development version from GitHub
pak::pak("harmonize-tools/land4health")`}</code></pre>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Quick example: load and initialize</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <p className="mt-2 text-gray-700">After installation, load the package and initialize Earth Engine:</p>
            <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-r">{`library(land4health)

ee_Initialize(quiet = TRUE)`}</code></pre>

            <p className="mt-2 text-gray-700">You&apos;ll see a brief welcome message similar to:</p>
            <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code>{`── Welcome to land4health ────────────────────────────────────────────────────
A tool of Harmonize Project to calculate and extract Remote Sensing Metrics
for Spatial Health Analysis. Currently, land4health supports metrics in the
following categories:
• Accessibility
• Climate
• Environment
• and more!
For a complete list of available metrics, use the l4h_list_metrics() function.

──────────────────────────────────────────────────────────────────────────────
Attaching core land4health packages:
→ rgee v1.1.7
→ sf v1.0.21`}</code></pre>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Additional resources</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li>Check out the official <a href="https://harmonize-tools.github.io/land4health/" target="_blank" rel="noopener noreferrer">package documentation</a></li>
              <li>GitHub repository: <a href="https://github.com/harmonize-tools/land4health" target="_blank" rel="noopener noreferrer">harmonize-tools/land4health</a> for the latest code, issues and examples</li>
            </ul>
          </div>
        </details>

        <p className="text-gray-700">You&apos;re now ready to use <code>land4health</code> for remote sensing metric extraction in spatial health analysis.</p>
      </div>
    </article>
  );
}
