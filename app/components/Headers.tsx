interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
export function H1({ children, className, ...props }: HeaderProps) {
  return (
    <h1
      {...props}
      className={`text-baseText text-center text-6xl font-bold py-4 rounded-xl w-full my-4 mx-6 slab${className ? ` ${className}` : ""}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeaderProps) {
  return (
    <h2
      {...props}
      className={`text-2xl font-semibold text-primary slab${className ? ` ${className}` : ""}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HeaderProps) {
  return (
    <h3
      {...props}
      className={`text-lg font-semibold text-baseText slab${className ? ` ${className}` : ""}`}
    >
      {children}
    </h3>
  );
}