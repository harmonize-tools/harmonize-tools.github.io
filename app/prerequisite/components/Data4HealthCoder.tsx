export default function Data4HealthCoder() {
  return (
    <div className="mt-4 rounded-lg bg-gray-50 p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fadeIn">
      <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 hover:text-purple-700">Installation for R Coders</h3>
      <p className="transform transition-all duration-300 hover:translate-x-1">To install Data4Health package:</p>
      <pre className="mt-2 bg-gray-100 p-2 rounded transition-all duration-300 hover:bg-purple-50 hover:shadow-inner group">
        <code className="block transition-all duration-300 group-hover:text-purple-700">
          install.packages("Data4Health")
        </code>
      </pre>
    </div>
  );
}