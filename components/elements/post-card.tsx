import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  datetime: string;
  date: string;
  category: {
    href: string;
    title: string;
  };
  href: string;
  title: string;
  description: string;
  author: {
    imageUrl: string;
    href: string;
    name: string;
    role: string;
  };
}

interface PostCardProps {
  post: Post;
  orientation?: "vertical" | "horizontal";
}

export const PostCard = ({
  post,
  orientation = "horizontal",
}: PostCardProps) => {
  return (
    <article
      key={post.id}
      className={cn(
        "flex mx-auto items-start justify-between p-6 w-full lg:p-3",
        orientation === "horizontal"
          ? "flex-col max-w-xl"
          : "flex-col sm:flex-row sm:space-x-8"
      )}
    >
      <Link href={post.href}>
        <Image
          src="/coding.png"
          alt=""
          height={400}
          width={300}
          className="w-full h-64 rounded-2xl"
        />
      </Link>
      <div>
        <div className="flex items-center gap-x-4 text-xs mt-4">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <Link
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category.title}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={post.author.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </Link>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
