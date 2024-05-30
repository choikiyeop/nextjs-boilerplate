import { PostCard } from "@/components/elements/post-card";
import { PageLayout } from "@/components/layouts/page-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const posts = [
  {
    id: 1,
    datetime: new Date().toString(),
    date: "Mar 16, 2020",
    category: {
      href: "#",
      title: "Marketing",
    },
    href: "#",
    title: "Boost your conversion rate",
    description:
      "Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta",
    author: {
      imageUrl: "",
      href: "#",
      name: "Michael Foster",
      role: "Front-end Developer",
    },
  },
  {
    id: 2,
    datetime: new Date().toString(),
    date: "Mar 16, 2020",
    category: {
      href: "#",
      title: "Marketing",
    },
    href: "#",
    title: "Boost your conversion rate",
    description:
      "Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta",
    author: {
      imageUrl: "",
      href: "#",
      name: "Michael Foster",
      role: "Front-end Developer",
    },
  },
  {
    id: 3,
    datetime: new Date().toString(),
    date: "Mar 16, 2020",
    category: {
      href: "#",
      title: "Marketing",
    },
    href: "#",
    title: "Boost your conversion rate",
    description:
      "Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta",
    author: {
      imageUrl: "",
      href: "#",
      name: "Michael Foster",
      role: "Front-end Developer",
    },
  },
];

export default async function Home() {
  return (
    <PageLayout>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <Image src="/tech.png" alt="tech" width={1920} height={300} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/rainy.png" alt="rainy" width={1920} height={720} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/coding.png" alt="coding" width={1920} height={720} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
