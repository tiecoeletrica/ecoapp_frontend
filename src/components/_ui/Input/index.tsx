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
        lg: "w-full h-12 px-6 py-3",
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
type Width<T> = "default" | "sm" | "lg" | T | null | undefined;

const mapSizeToWidth = (size: Width<string>): string | undefined => {
  switch (size) {
    case "default":
      return "auto";
    case "full":
      return "100%";
    case "sm":
      return "200px";
    case "lg":
      return "60%";
    case null:
    case undefined:
      return undefined;
    default:
      return size;
  }
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, variant, size, ...props }, ref) => {
    return (
      <div className="flex flex-col" style={{ width: mapSizeToWidth(size) }}>
        <label className="block text-center text-blue-dark font-bold my-2 text-base w-full">
          {title}
        </label>
        <input
          ref={ref}
          {...props}
          className={cn(inputVariants({ variant, className }))}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input, inputVariants };
