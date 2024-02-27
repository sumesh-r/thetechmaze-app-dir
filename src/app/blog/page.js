import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";

export default function Blog() {
  return (
    <div className="px-5 sm:px-20">
      <Header highlight="blog" />
      <div className="mt-32"></div>
      <div>
        {/* blog */}
        <div>
          <div className="flex pb-5 flex-col items-center gap-2">
            <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
              Blogs
            </h1>
            <h1>Here are some of my writings</h1>
          </div>

          <div className="flex flex-wrap space-x-2 justify-evenly">
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
          </div>
        </div>

        {/* blog series */}
        <div>
          <div className="flex pb-5 flex-col items-center gap-2">
            <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
              Blogs Series
            </h1>
            <h1>a series of blogs</h1>
          </div>

          <div className="flex flex-wrap space-x-2 justify-evenly">
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
            <div className="">
              <PostList
                post={{
                  imgSrc:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  imgAlt: "blog alt",
                  slug: "",
                  date: "Jan 15, 2024",
                  title:
                    "Linear Regression: A Mathematical and Practical Guide with NumPy",
                  tag: "Machine Learning",
                  tagSlug: "",
                  excert:
                    "Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
