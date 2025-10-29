export default function Socio4HealthNonCoder() {
  return (
    <article className="mt-4 rounded-lg bg-white p-6 shadow-sm">
      <header>
        <h1 className="page-title text-2xl font-extrabold mb-2">Guide to Installing Socio4Health</h1>
        <p className="page-description text-sm text-gray-600 mb-4">Friendly step-by-step instructions for non-coders.</p>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Try our online app</h2>
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
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Deploy yourself</h2>
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

        <p className="mt-3 text-gray-700"><strong>Step 4:</strong> Run the app or test the library:</p>
        <pre className="mt-2 bg-gray-50 border rounded p-3 overflow-x-auto"><code className="language-python">{`import socio4health
print(socio4health.__version__)`}</code></pre>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Additional Resources</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li>Official documentation: check the socio library's official docs for API reference</li>
          <li>GitHub repository: browse the project's code and issues</li>
          <li>Community support: join relevant forums or Discord channels for help</li>
        </ul>
      </section>

      <p className="text-gray-700">You're now ready to try Socio4Health — contact the project maintainers if you need help deploying.</p>
    </article>
  );
}