import Server from "../../components/Server";

export default function ServerDataFetch() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 py-10 px-6">
      <div className="container mx-auto max-w-7xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Book Collection & Data Fetching
        </h1>
        <Server />
      </div>
    </div>
  );
}