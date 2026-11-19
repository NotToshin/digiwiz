import type { ComponentProps } from "react";
type Props = ComponentProps<"a"> & { variant?: "primary" | "secondary" };
export function ButtonLink({ variant = "primary", className = "", children, ...props }: Props) {
  return <a className={`button ${variant === "secondary" ? "secondary" : ""} ${className}`} {...props}>{children}</a>;
}
