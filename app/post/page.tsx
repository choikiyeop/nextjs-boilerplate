import { PostCard } from "@/components/elements/post-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const posts = [
  {
    id: 1,
    datetime: new Date().toString(),
    date: "Mar 16, 2020",
    category: {
      href: "/post/1",
      title: "Marketing",
    },
    href: "/post/1",
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
export default function PostPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="space-y-16 py-8">
        {posts.map((post) => (
          <PostCard key={post.id} orientation="vertical" post={post} />
        ))}
      </div>
      <Pagination className="mt-8 mb-16">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
