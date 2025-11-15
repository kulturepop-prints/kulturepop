import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline";
  size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200";

    const variants = {
      default:
        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      primary:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      secondary:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      danger:
        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      outline:
        "border-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;