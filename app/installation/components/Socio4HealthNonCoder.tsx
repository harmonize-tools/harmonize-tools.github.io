export default function Socio4HealthNonCoder() {
  return (
    <article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <header>
        <h1 className="page-title text-2xl font-extrabold mb-2">Guide to Installing Socio4Health</h1>
        <p className="page-description text-sm text-gray-600 mb-4">Friendly step-by-step instructions for non-coders.</p>
      </header>
      <details className="group mt-4 mb-4 border rounded">
        <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
          <h2 className="text-lg font-semibold">Try our online app</h2>
          <span className="text-gray-600">▸</span>
        </summary>
        <div className="p-4">
          <p className="text-gray-700">You can try the hosted Streamlit app:</p>
          <div className="mt-3">
            <a
              href="https://socio4health.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border p-3 bg-gray-50 hover:shadow-md"
            >
              https://socio4health.streamlit.app/
            </a>
          </div>
        </div>
      </details>

      <details className="group mt-4 mb-4 border rounded">
        <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
          <h2 className="text-lg font-semibold">Deploy yourself</h2>
          <span className="text-gray-600">▸</span>
        </summary>
        <div className="p-4">
          <p className="text-gray-700"><strong>Step 1:</strong> Clone the GitHub repository (or download the ZIP):</p>
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-text">{`https://github.com/harmonize-tools/interfaz_s4h.git`}</code></pre>

          <p className="mt-3 text-gray-700"><strong>Step 2:</strong> Create and activate a virtual environment (recommended):</p>
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`# Create virtual environment
python -m venv venv

# Activate on Windows
venv\\Scripts\\activate

# Activate on macOS/Linux
source venv/bin/activate`}</code></pre>

          <p className="mt-3 text-gray-700"><strong>Step 3:</strong> Install requirements:</p>
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-bash">{`pip install -r requirements.txt`}</code></pre>

          <p className="mt-3 text-gray-700"><strong>Step 4:</strong> Run the app:</p>
          <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-python">{`streamlit run Home.py --server.maxUploadSize=500`}</code></pre>
          <p className="mt-3 text-gray-700">Then open your browser and go to <strong>http://localhost:8501</strong> to access the app.</p>
        </div>
      </details>

      <details className="group mt-4 mb-4 border rounded">
        <summary className="flex items-center justify-between cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100">
          <h2 className="text-lg font-semibold">Additional Resources</h2>
          <span className="text-gray-600">▸</span>
        </summary>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>Official documentation: check the socio library's official docs for API reference</li>
            <li>GitHub repository: browse the project's code and issues</li>
            <li>Community support: join relevant forums or Discord channels for help</li>
          </ul>
        </div>
      </details>

      <p className="text-gray-700">You're now ready to try Socio4Health — contact the project maintainers if you need help deploying.</p>
    </article>
  );
}