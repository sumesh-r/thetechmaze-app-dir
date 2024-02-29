import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import {  getPostsByTagData } from "@/lib/posts";

export default async function Blog(props) {
  let posts = await getPostsByTagData(props.params.slug);

  return (
    <div className="px-5 sm:px-20">
      <Header highlight="blog" />
      <div className="mt-32"></div>
      <div>
        {/* blog */}
        {posts[0] ? (
          <div>
            <div className="flex pb-5 flex-col items-center gap-2">
              <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
                Blogs
              </h1>
              <h1>Here are some of my writings</h1>
            </div>

            <div className="flex flex-wrap space-x-2 justify-evenly">
              {posts.map((post, index) => (
                <div key={index} className="">
                  <PostList
                    post={{
                      imgSrc: post.feature_image,
                      imgAlt: post.feature_image_alt,
                      slug: post.slug,
                      date: post.updated_at,
                      title: post.title,
                      tag: post.primary_tag.name,
                      tagSlug: post.primary_tag.slug,
                      excerpt: post.excerpt,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center text-3xl min-h-screen flex justify-center items-center">
            No Blog Post Yet
          </div>
        )}

        {/* blog series */}
        {/* <div>
          <div className="flex pb-5 flex-col items-center gap-2">
            <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
              Blogs Series
            </h1>
            <h1>a series of blogs</h1>
          </div>

          <div className="flex flex-wrap space-x-2 justify-evenly">
            {posts.map((post, index) => (
              <div key={index} className="">
                <PostList
                  post={{
                    imgSrc: post.feature_image,
                    imgAlt: post.feature_image_alt,
                    slug: post.slug,
                    date: post.updated_at,
                    title: post.title,
                    tag: post.primary_tag.name,
                    tagSlug: post.primary_tag.slug,
                    excerpt: post.excerpt,
                  }}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
