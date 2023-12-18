import * as React from "react";

import { cn } from "../../lib/utils-tailwind";

import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex column border border-solid border-gray rounded outline-none w-full",
  {
    variants: {
      variant: {
        default: "",
        left: "",
      },
      size: {
        default: "h-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  inputSize?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, variant, size, ...props }, ref) => {
    return (
      <div className="max-w-full w-full">
        <label className="font-bold">{title}</label>
        <input
          ref={ref}
          {...props}
          className={cn(inputVariants({ variant, size, className }))}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input, inputVariants };
