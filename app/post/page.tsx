import { PostCard } from "@/components/elements/post-card";
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
export default function PostPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="space-y-16 py-8">
        {posts.map((post) => (
          <PostCard orientation="vertical" post={post} />
        ))}
      </div>
    </main>
  );
}
