import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import { getProjectsData } from "@/lib/posts";

export default async function Projects() {
  const projects = await getProjectsData();
  return (
    <div className="px-5 sm:px-20">
      <Header highlight="projects" />
      <div className="mt-32"></div>
      <div>
        {/* projects */}
        {projects[0] ? (
          <div>
            <div className="flex pb-5 flex-col items-center gap-2">
              <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
                Projects
              </h1>
              <h1>
                I like to build things. Here are some of the things that I have
                built.
              </h1>
            </div>

            <div className="flex flex-wrap space-x-2 justify-evenly">
              {projects.map((project, index) => (
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
        ) : (
          <div className="w-full text-center text-3xl min-h-screen flex justify-center items-center">
            No Projects Yet
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
