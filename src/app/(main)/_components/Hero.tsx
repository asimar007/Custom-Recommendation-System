import Link from "next/link";
import Image from "next/image";

interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface HeroProps {
  videos: Video[];
  searchResults: Video[];
  isSearching: boolean;
  isLoading: boolean;
  searchQuery: string;
}

export const Hero = ({
  videos,
  searchResults,
  isSearching,
  isLoading,
  searchQuery,
}: HeroProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {isSearching && searchResults.length === 0 && !isLoading ? (
          <div className="col-span-full text-center text-gray-400">
            No videos found for &quot;{searchQuery}&quot;
          </div>
        ) : (
          (isSearching ? searchResults : videos)?.map((video) => (
            <Link
              href={`/videos/${video._id}`}
              key={video._id}
              className="group"
            >
              <div className="flex flex-col">
                <div className="relative w-full pt-[56.25%] bg-gray-800 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-roboto font-medium line-clamp-2 text-white mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
