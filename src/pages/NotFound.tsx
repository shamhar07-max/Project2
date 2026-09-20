import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-red">404</p>
      <h1 className="mt-3 text-3xl font-bold text-navy">Page not found</h1>
      <p className="mt-4 text-slate">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
      >
        Back to homepage
      </Link>
    </div>
  )
}
