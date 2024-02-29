import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getTagsData } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Tags() {
  const tags = await getTagsData();

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

          {tags[0] ? (
            <div className="max-w-7xl md:mx-auto md:px-20">
              <div className="flex gap-5 flex-wrap">
                {tags.map((tag, index) => (
                  <Link
                    href={`/tags/${tag.slug}`}
                    query={{ name: tag.name }}
                    key={index}
                    className="border  border-muted-foreground/50 hover:border-primary rounded-md flex"
                  >
                    {tag.feature_image && (
                      <div className="h-5 w-5  overflow-hidden object-cover relative">
                        <Image
                          src={tag.feature_image}
                          alt="tag image"
                          className="pt-1 pl-1"
                          fill={true}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h1 className="px-2 text-base font-medium text-primary">
                      {tag.name}
                    </h1>
                    <p className="bg-zinc-200 dark:bg-zinc-700/80 rounded-r-[5px] px-2 border-l border-muted-foreground/50">
                      {tag.count.posts}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full text-center text-3xl min-h-screen flex justify-center items-center">
              No Tags Yet
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
