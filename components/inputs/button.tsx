import { cn } from "@/libs/tailwind/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(variants({ variant, size, className }))} {...props} />
  );
};

const variants = cva("inline-flex items-center justify-center rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-opacity-90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    },
    size: {
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
