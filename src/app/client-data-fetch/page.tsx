import Client from "../../components/Client";

export default function ClientDataFetch() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-blue-100 to-purple-100 py-12 px-6">
      <div className="container mx-auto max-w-7xl bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Product Collection
        </h1>
        <Client />
      </div>
    </div>
  );
}