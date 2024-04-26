import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";

export async function getPostsData() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "-projects";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags&fields=${fields}&filter=tag:${filter}`;

  // const response = await fetch(url, {
  //   method: "GET",
  // }).then(async function (res) {
  //   const status = res.status;
  //   const data = await res.json();
  //   return {
  //     data,
  //     status,
  //   };
  // });

  const response = await fetch(url);
  console.log(response);

  let posts = [];

  // if (response.status != 200) {
  //   console.log(response.data.errors);
  //   posts = [];
  // } else {
  //   posts = response.data.posts;
  //   if (posts == undefined) posts = [];
  // posts.map(
  //   (post, idx) => (
  //     (post.published_at = post.published_at.split("T")[0]),
  //     (post.updated_at = post.updated_at.split("T")[0])
  //   )
  // );
  // }

  return posts;
}
export async function getStaticProps() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "-projects";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags&fields=${fields}&filter=tag:${filter}`;
  const posts = await fetch(url).then((res) => res.json());
  posts.map(
    (post, idx) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.updated_at = post.updated_at.split("T")[0])
    )
  );
  return {
    props: {
      posts,
    },
  };
}

export default async function Blog({posts}) {
  let pots = await getPostsData();

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
