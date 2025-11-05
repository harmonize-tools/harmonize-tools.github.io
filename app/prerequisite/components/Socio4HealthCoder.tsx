export default function Socio4HealthCoder() {
  return (
    <article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <header>
        <h1 className="page-title text-2xl font-extrabold mb-2">Guide to Installing Socio4Health</h1>
        <p className="page-description text-sm text-gray-600 mb-4">Quick reference for prerequisites and installation methods.</p>
      </header>

      <div className="page-body text-gray-800">
        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Prerequisites</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li><strong>Python Version:</strong> Python 3.10 or higher is recommended</li>
              <li><strong>pip:</strong> Python package installer (usually comes with Python)</li>
            </ul>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Installation Methods</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <div>
              <h3 className="mt-2 font-semibold">1. Installing in Google Colab</h3>
              <p className="mt-2 text-gray-700">Google Colab comes with many libraries pre-installed, but you'll need to install <code className="bg-gray-100 px-1 rounded">socio</code> manually:</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`!pip install socio`}</code></pre>
              <p className="mt-2 text-gray-700">After installation, import the library:</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-python">{`import socio4health
print(socio4health.__version__)`}</code></pre>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">2. Installing in local IDE</h3>
              <p className="mt-2 text-gray-700"><strong>Step 1:</strong> Open the integrated terminal</p>
              <p className="mt-2 text-gray-700"><strong>Step 2:</strong> Create and activate a virtual environment (recommended):</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`# Create virtual environment
python -m venv venv

# Activate on Windows
venv\\Scripts\\activate

# Activate on macOS/Linux
source venv/bin/activate`}</code></pre>
              <p className="mt-2 text-gray-700"><strong>Step 3:</strong> Install the socio4health package:</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`pip install socio4health`}</code></pre>
              <p className="mt-2 text-gray-700"><strong>Step 4:</strong> Create a new Python file and import the library:</p>
              <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-python">{`import socio4health
print(socio4health.__version__)`}</code></pre>
            </div>
          </div>
        </details>

        <details className="group mt-4 mb-4 border rounded">
          <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Additional Resources</h2>
            <span className="text-gray-600">▸</span>
          </summary>
          <div className="p-4">
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              <li>Official documentation: Check the socio library's official documentation for detailed API reference</li>
              <li>GitHub repository: Visit the project's GitHub page for examples and issue tracking</li>
              <li>Community support: Join relevant forums or Discord channels for help</li>
            </ul>
          </div>
        </details>

        <p className="text-gray-700">You're now ready to use the socio4health package!</p>
      </div>
    </article>
  );
}