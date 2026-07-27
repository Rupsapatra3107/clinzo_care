import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b p-4 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          ClinzoCare
        </h1>

        <div className="space-x-3">
          <Link
            to="/"
            className="px-4 py-2 rounded border"
          >
            Book
          </Link>

          <Link
            to="/doctor"
            className="px-4 py-2 rounded bg-green-600 text-white"
          >
            Doctor
          </Link>
        </div>

      </div>
    </nav>
  );
}
