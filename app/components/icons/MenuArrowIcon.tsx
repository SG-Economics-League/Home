import { twMerge } from "tailwind-merge";

export default function MenuArrowIcon({ className, isExpanded }: { className?: string; isExpanded?: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={twMerge(className, `transition-transform duration-200 ${isExpanded ? "rotate-0" : "rotate-90"}`)}
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
    )
}