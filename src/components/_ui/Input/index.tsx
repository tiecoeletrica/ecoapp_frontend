import * as React from "react";

import { cn } from "../../../lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex items-center justify-between column border border-solid border-gray px-2 h-12 my-2 rounded outline-none w-full",
  {
    variants: {
      variant: {
        default:
          "flex items-center justify-between column border border-solid border-gray px-2 h-12 my-2 rounded",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 px-3 py-1",
        lg: "h-12 px-6 py-3",
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
  inputSize?: string; // Renomeando para evitar conflito
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, variant, size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="block text-center text-blue-dark font-bold my-2 text-base w-full">
          {title}
        </label>
        <input
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input, inputVariants };
