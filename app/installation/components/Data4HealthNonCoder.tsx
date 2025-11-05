export default function Data4HealthNonCoder() {
  return (
    <div className="mt-4 rounded-lg bg-gray-50 p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fadeIn">
      <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 hover:text-purple-700">Installation for Non-coders</h3>
      <p className="transform transition-all duration-300 hover:translate-x-1">To install Data4Health:</p>
      <ol className="list-decimal list-inside mt-2 space-y-2">
        {['Download the Data4Health GUI installer from our website',
          'Run the installer by double-clicking the downloaded file',
          'Follow the installation wizard instructions'
        ].map((text, index) => (
          <li key={index} className="transform transition-all duration-300 hover:translate-x-2 hover:text-purple-700 cursor-default">
            {text}
          </li>
        ))}
      </ol>
    </div>
  );
}