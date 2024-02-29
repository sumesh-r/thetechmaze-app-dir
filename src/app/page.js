import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import Link from "next/link";
import { getLatestPostsData, getLatestProjectsData } from "@/lib/posts";

export default async function Home() {
  const latestPost = await getLatestPostsData();
  const latestProjects = await getLatestProjectsData();
  return (
    <div className="px-5 sm:px-20">
      <Header highlight="home" />
      <div>
        <div className="mt-32"></div>
        {/* about me */}
        <div className="flex flex-col justify-center items-center w-full md:flex-row-reverse md:justify-between">
          <div className="rounded-full h-44 w-44 object-cover md:h-64 md:w-64 relative overflow-hidden">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQHKUkTM6tsXhQ/profile-displayphoto-shrink_800_800/0/1700412945067?e=1714608000&v=beta&t=vCiizWjsc-9l4DhqbTdU3HsGSA0oMoCa7BtY3wVmkok"
              alt="Sumesh R Pic"
              fill={true}
            />
          </div>

          <div className="space-y-3 md:w-1/2 md:mr-4">
            <div className="flex flex-col gap-4 border border-border p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary">
              <div className="flex items-center gap-4">
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
                  className="lucide-icon lucide lucide-mailbox "
                >
                  <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                  <polyline points="15,9 18,9 18,11"></polyline>
                  <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                  <line x1="6" x2="7" y1="10" y2="10"></line>
                </svg>
                <h1 className="font-semibold">Whats New?</h1>
              </div>
              <div>
                Currently working on 100 Days of Fullstack Development. A 100
                day challenge to learn, teach and build webapps using @
                <Link
                  href="https://nextjs.org"
                  className="underline hover:underline-offset-4"
                >
                  NextJs
                </Link>
              </div>
            </div>
            <h1 className="font-bold md:text-xl">Hi, I am</h1>
            <h1 className="text-2xl font-bold md:text-5xl">Sumesh R</h1>
            <p>
              a web developer. I love creating websites that look cool and work
              well. Its like digital magic! I explore web development, mixing
              creativity with making things work smoothly. Always learning new
              stuff, especially in the MERN stack - thats MongoDB, Express.js,
              React, and Node.js - to bring fresh and smart ideas to life.
            </p>
            <div className="max-w-2xl py-4 mx-auto grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4">
              <Link
                href="https://github.com/sumesh-r"
                target="_blank"
                className="gap-3 inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
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
                  className="lucide-icon lucide lucide-github "
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <p>GitHub</p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sumesh-r/"
                target="_blank"
                className="gap-3 inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className=""
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  ></path>
                </svg>
                <p>LinkedIn</p>
              </Link>
              <Link
                href="https://x.com/"
                target="_blank"
                className="gap-3 inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  ></path>
                </svg>
                <p>Twitter</p>
              </Link>
              {/* <Link
              href="/Prabhu Kiran Konda Resume.pdf"
              target="_blank"
              className="gap-3 inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
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
                className="lucide-icon lucide lucide-file-text "
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              <p>Resume</p>
            </Link> */}
            </div>
          </div>
        </div>

        {/* latest post */}
        {latestPost[0] && (
          <div className="flex mt-5 mb-10 flex-col justify-between md:flex-row md:items-center space-y-4">
            <div className="space-y-3 w-full">
              <div className="text-start">
                <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl">
                  Latest Post
                </h1>
              </div>
              <p className="text-muted-foreground">
                Check out my latest blog post
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-base"
              >
                All blogs
              </Link>
            </div>

            <div className="w-full">
              <PostList
                post={{
                  imgSrc: latestPost[0].feature_image,
                  imgAlt: latestPost[0].feature_image_alt,
                  slug: latestPost[0].slug,
                  date: latestPost[0].updated_at,
                  title: latestPost[0].title,
                  tag: latestPost[0].primary_tag.name,
                  tagSlug: latestPost[0].primary_tag.slug,
                  excerpt: latestPost[0].excerpt,
                }}
              />
            </div>
          </div>
        )}

        {/* Lastest Projects */}
        {latestProjects[0] && (
          <div>
            <div className="flex flex-col items-start py-10 md:items-center md:container space-y-5">
              <div className="items-start px-4 flex flex-col gap-3 md:items-center">
                <h1 className="text-2xl font-bold text-transparent pb-1 bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl">
                  Latest Projects
                </h1>
                <p className="text-muted-foreground">
                  Here are some of my latest projects
                </p>
                <div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-base"
                  >
                    View all Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 justify-evenly flex-wrap">
              {latestProjects.map((project, index) => (
                <div key={index} className="">
                  <PostList
                    project={{
                      imgSrc: project.feature_image,
                      imgAlt: project.feature_image_alt,
                      slug: project.slug,
                      date: project.updated_date,
                      title: project.title,
                      tag: project.primary_tag.name,
                      tagSlug: project.primary_tag.slug,
                      excerpt: project.excerpt,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
