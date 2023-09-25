"use client";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

const checkboxVariants = cva("checkbox", {
  variants: {
    variant: {
      default: "",
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      info: "checkbox-info",
      success: "checkbox-success",
      warning: "checkbox-warning",
      error: "checkbox-error",
    },
    size: {
      xs: "checkbox-xs",
      sm: "checkbox-sm",
      md: "checkbox-md",
      lg: "checkbox-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  asChild?: boolean;
}

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    className={cn(checkboxVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
