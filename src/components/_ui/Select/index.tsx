import * as React from "react";

import { cn } from "../../../lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const selectVariants = cva(
  "flex items-center justify-between column border border-solid border-gray px-2 h-12 my-2 rounded outline-none",
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

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  selectSize?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, title, variant, size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="block text-center text-blue-dark font-bold my-1 text-base">
          {title}
        </label>
        <select
          className={cn(selectVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Select.displayName = "Select";
export { Select, selectVariants };
