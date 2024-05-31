import { CommentSection } from "@/components/elements/comment-section";
import { Separator } from "@/components/ui/separator";

export default function PostPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 lg:px-16">
      <article className="space-y-4 y-8 lg:space-y-8 lg:my-16">
        <div className="mt-8 lg:mt-16 space-y-3">
          <h1 className="text-4xl font-bold lg:text-5xl">
            디자인패턴: 옵저버 패턴
          </h1>
          <div className="flex text-gray-500 text-[15px]">
            <span>바보</span>
            <Separator
              orientation="vertical"
              className="h-4 mx-2 self-center"
            />
            <time>3일 전</time>
          </div>
        </div>
        <div>
          <p>안녕하세요 오늘은</p>
        </div>
      </article>
      <CommentSection />
    </main>
  );
}
