import Image from "next/image";
import Link from "next/link";

export default function PostList({ post, project }) {
  const p = {
    imgSrc: post?.imgSrc || project?.imgSrc,
    imgAlt: post?.imgAlt || project?.imgAlt,
    slug: post?.slug || project?.slug,
    date: post?.date || "",
    title: post?.title || project?.title,
    tag: post?.tag || project?.tag,
    tagSlug: post?.tagSlug || project?.tagSlug,
    excerpt: post?.excerpt || project?.excerpt,
    projectVisit: project?.projectVisit || "https://thetechmaze.com",
    projectSource: project?.projectSource || "https://github.com/sumesh-r",
  };
  return (
    <div className="flex flex-col items-end mb-10">
      <div className="block pb-2 border-2 rounded-xl hover:border-primary no-highlight relative md:max-w-md shadow-xl space-y-2  lg:max-w-md cursor-pointer no-highlight">
        <Link
          className=""
          href={`${post ? `/blog/${p.slug}` : `/projects/${p.slug}`}`}
        >
          <div className="p-2">
            <div className="h-56 sm:h-72 w-full overflow-hidden rounded-md object-cover relative">
              <Image
                src={p.imgSrc}
                alt={p.imgAlt}
                className=""
                fill={true}
                loading="lazy"
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-between h-full gap-4 p-2.5 pt-0">
          <div className="flex flex-col justify-between gap-1">
            <Link
              className=""
              href={`${post ? `/blog/${p.slug}` : `/projects/${p.slug}`}`}
            >
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                {post && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-icon lucide lucide-calendar w-3 h-3"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <h1>{p.date}</h1>
                  </>
                )}
              </div>
              <h1 className="text-lg font-semibold ">{p.title}</h1>
            </Link>
            <div className="flex gap-1 flex-wrap">
              <Link
                href={`/tags/${p.tagSlug}`}
                className="inline-flex items-center px-2.5 text-xs font-semibold transition-colors focus:outline-none select-none text-foreground py-1 border rounded-md border-primary gap-2"
              >
                <div className="h-5 w-5 overflow-hidden object-cover relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    className=""
                    fill={true}
                    loading="lazy"
                  />
                </div>
                <p className="text-sm">{p.tag}</p>
              </Link>
            </div>
          </div>
          <div className="">
            <Link className="" href={`/blog/${p.slug}`}>
              <p className="">{p.excerpt}</p>
            </Link>
          </div>
        </div>
        {project && (
          <div className="flex mx-2.5  items-center justify-between">
            <div>
              <a
                href={p.projectVisit}
                className="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 py-0"
                target="_blank"
                data-bits-button-root=""
              >
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-icon lucide lucide-arrow-right h-4 w-4 ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div>
              <Link
                href={p.projectSource}
                className="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 py-0"
                target="_blank"
                data-bits-button-root=""
              >
                View Source
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-icon lucide lucide-github h-4 w-4 ml-2"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
