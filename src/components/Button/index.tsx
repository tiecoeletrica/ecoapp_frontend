import * as React from "react";

import { cn } from "../../lib/utils-tailwind";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center justify-center rounded text-sm font-medium data-[state=active]:bg-green text-white transition-colors duration-300 uppercase w-full",
  {
    variants: {
      background: {
        default: "bg-green-400 hover:bg-green-600",
        blue: "bg-blue-dark-900 hover:blue-800",
        return: "bg-red hover:bg-red-600",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-4",
        lg: "h-6  px-8 text-xs",
      },
      sucess: {
        true: "bg-emerald-400 hover:bg-emerald-600",
      },
    },
    defaultVariants: {
      background: "default",
      size: "default",
      sucess: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ sucess, className, background, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "button" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ sucess, background, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
