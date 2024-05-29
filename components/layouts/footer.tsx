import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-6 lg:mx-12">
      <div></div>
      <hr />
      <div className="flex justify-between my-8 text-gray-500 items-center">
        <div className="text-xs">© 2024 Blog, Inc. All rights reserved.</div>
        <Link
          href="https://github.com/choikiyeop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};
