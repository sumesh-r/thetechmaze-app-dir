import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Tags() {
  return (
    <div className="px-5 sm:px-20">
      <Header highlight="tags" />
      <div className="mt-32"></div>
      <div className="min-h-screen">
        {/* tags */}
        <div>
          <div className="flex pb-5 flex-col items-center gap-2">
            <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
              Tags
            </h1>
          </div>

          <div className="max-w-7xl md:mx-auto md:px-20">
            <div className="flex gap-5 flex-wrap">
              <Link
                href="/tags/mdsvex"
                className="border  border-muted-foreground/50 hover:border-primary rounded-md flex"
              >
                <div className="h-5 w-5  overflow-hidden object-cover relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    className="pt-1 pl-1"
                    fill={true}
                    loading="lazy"
                  />
                </div>
                <h1 className="px-2 text-base font-medium text-primary">
                  MDsveX
                </h1>
                <p className="bg-zinc-200 dark:bg-zinc-700/80 rounded-r-[5px] px-2 border-l border-muted-foreground/50">
                  3
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
