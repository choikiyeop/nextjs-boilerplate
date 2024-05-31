import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const CommentForm = () => {
  return (
    <div className="space-y-2 flex flex-col">
      <div className="flex items-center space-x-2">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold">닉네임</span>
      </div>
      <Textarea
        id="comment"
        placeholder="댓글을 작성하세요"
        className="resize-none"
      />
      <Button className="self-end">작성</Button>
    </div>
  );
};
