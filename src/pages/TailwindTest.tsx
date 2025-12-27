export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tailwind CSS v4</h1>
        <p className="text-gray-600 mb-6">Tailwind CSS is successfully installed and working!</p>
        <div className="flex gap-4">
          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Primary
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}
