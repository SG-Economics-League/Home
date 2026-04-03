import { twMerge } from "tailwind-merge";

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
    to?: string;
    direction?: string;
    className?: string;
}
export default function GradientText({ children,
    from = "from-primary",
    to = "to-secondary",
    direction = "bg-gradient-to-r",
    className,
 }: GradientTextProps) {
  return (
    <span className={twMerge(`bg-clip-text text-transparent`, direction, from, to, className)}>
      {children}
    </span>
  );
}