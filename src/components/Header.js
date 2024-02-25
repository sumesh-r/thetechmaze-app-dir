import { ThemeToggle } from "./theme-toggle";

export default function Header(highlight) {
  return (
    <div className="flex w-full justify-between py-5 px-10">
      <div className="py-2">Logo</div>
      <div className="flex">
        <div className="px-3 py-2 cursor-pointer hover:bg-green-200 dark:hover:bg-opacity-10 rounded-lg">
          Blog
        </div>
        <div className="px-3 py-2 cursor-pointer hover:bg-green-200 dark:hover:bg-opacity-10 rounded-lg">
          Tags
        </div>
        <div className="px-3 py-2 cursor-pointer hover:bg-green-200 dark:hover:bg-opacity-10 rounded-lg">
          Projects
        </div>
        <div className="px-3 py-2 mr-5 cursor-pointer hover:bg-green-200 dark:hover:bg-opacity-10 rounded-lg">
          About
        </div>
        <div className="mt-1">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
