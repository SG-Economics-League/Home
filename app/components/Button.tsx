
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button 
    className={`
        inline-block
        px-6 sm:px-8
        py-2
        bg-[#ffffff]
        text-secondary
        text-lg
        font-medium
        border-2
        rounded-xl
        border-b-4
        border-secondary
        transition-all
        duration-200
        ease-in-out
        hover:scale-105
        ${className ? ` ${className}` : ""}
    `}
        {...props}>
      {children}
    </button>
  );
}