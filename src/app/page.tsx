import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 via-teal-600 to-teal-600 flex justify-center items-center py-12">
      <div className="w-full max-w-lg p-8 bg-gradient-to-r from-pink-100 to-pink-200 shadow-lg rounded-3xl transform transition-all hover:scale-105">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to Data Fetching
          </h2>
          <p className="text-md text-gray-600 mb-4">
            Client and Server Side Data Fetching Examples
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="/client-data-fetch">
            <Button
              button="Client-Side Data Fetching"
              className="bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 ease-in-out rounded-full py-3 px-6"
            />
          </Link>
          <Link href="/server-data-fetch">
            <Button
              button="Server-Side Data Fetching"
              className="bg-teal-600 text-gray hover:bg-teal-700 transition-all duration-300 ease-in-out rounded-full py-3 px-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}