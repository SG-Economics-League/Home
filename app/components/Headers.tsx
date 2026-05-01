import { twMerge } from "tailwind-merge";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
export function H1({ children, className, ...props }: HeaderProps) {
  return (
    <h1
      {...props}
      className={twMerge("text-baseText text-center text-6xl font-bold py-4 rounded-xl w-full my-4 slab", className)}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeaderProps) {
  return (
    <h2
      {...props}
      className={twMerge("text-2xl font-semibold text-primary slab", className)}
    >
      {children}
    </h2>
  );
}


export function H3({ children, className, ...props }: HeaderProps) {
  return (
    <h3
      {...props}
      className={twMerge("text-lg font-semibold text-baseText slab", className)}
    >
      {children}
    </h3>
  );
}

export function H3L({ children, className, ...props }: HeaderProps) {
  return (
    <h3 className={twMerge("md:text-2xl text-3xl font-semibold text-baseText slab", className)} {...props}>
      {children}
    </h3>
  );
}

export function H2L({ children, className, ...props }: HeaderProps) {
  return (
    <h2
      {...props}
      className={twMerge("text-center md:text-6xl text-8xl font-bold text-black slab", className)}
    >
      {children}
    </h2>
  );
}

export function H2M({ children, className, ...props }: HeaderProps) {
  return (
    <h2
      {...props}
      className={twMerge("text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black slab mb-4", className)}
    >
      {children}
    </h2>
    );
}