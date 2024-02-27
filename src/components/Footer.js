import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center p-2 md:justify-between md:flex-row">
        <div>TheTechMaze | © 2024</div>
        <div className="flex items-center gap-2">
          <h1>Made with</h1>

          <Link href="https://nextjs.org">NextJs</Link>
        </div>
      </div>
    </footer>
  );
}
