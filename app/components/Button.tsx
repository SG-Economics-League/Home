"use client"
import { track } from "@vercel/analytics";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  target?: string,
  trackingEvent?: string;
}

export default function Button({ children, trackingEvent,onClick, className,href, variant = "primary",target="_blank", ...props }: ButtonProps) {
  const baseClass = "inline-block font-medium px-6 sm:px-8 py-2 rounded-xl border-2 border-b-4 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md hover:brightness-90";
  const variantClass = variant === "secondary"
    ? "bg-secondary text-white border-[#3a5fa0]"
    : "bg-[#ffffff] text-secondary border-secondary";
    const buttonComponent = (<button
      onClick={(e) => {
        if (trackingEvent) {
          track(trackingEvent);
        }
        onClick?.(e);
      }}
      className={twMerge(baseClass, variantClass, className)}
      {...props}>
      {children}
    </button>)
  return (
    href ? <Link href={href} target={target!=="_self"?target:undefined} className="contents">
      {buttonComponent}
    </Link> : buttonComponent
  );
}