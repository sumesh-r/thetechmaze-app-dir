import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

export default function Projects() {
  return (
    <div className="px-5 sm:px-20">
      <Header highlight="projects" />
      <div className="mt-32"></div>
      <div>
        {/* projects */}
        <div>
          <div className="flex pb-5 flex-col items-center gap-2">
            <h1 className="text-5xl pb-1 font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">
              Projects
            </h1>
            <h1>
              I like to build things. Here are some of the things that I've
              built.
            </h1>
          </div>

          <div className="flex flex-wrap space-x-2 justify-evenly">
            <div className="">
              <PostList
                project={{
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
                project={{
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
                project={{
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
                project={{
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
                project={{
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
