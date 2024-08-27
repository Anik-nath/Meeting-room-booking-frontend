import { SearchIcon } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div>
        <div className="flex flex-row gap-0 text-8xl font-bold text-secondary">
          <span>4</span>
          <span>
            <SearchIcon className="w-32 h-32" />
          </span>
          <span>4</span>
        </div>
        <p className="text-white text-center text-2xl font-semibold uppercase">
          page not found
        </p>
        <div className="text-center mt-4">
          <a className="text-secondary underline hover:font-semibold" href="/">
            Go to home
          </a>
        </div>
      </div>
    </div>
  );
}
