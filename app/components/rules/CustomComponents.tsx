import { H2, H3 } from "../Headers";

interface SubHeadingProps {
  children: string;
  className?: string;
}
function SubHeading({ children, className }: SubHeadingProps) {
  return <H2 id={children} className={className}>{children}</H2>;
}
function SubHeading2({ children, className }: SubHeadingProps) {
  return <H3 id={children} className={className}>{children}</H3>;
}

function UnorderedList({ items }: { items: (string | (string | string[])[])[] }) {
  const renderList = (items: (string | (string | string[])[])[]) => {
    return (
      <ul className="list-disc ml-4">
        {items.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <li key={index} className="ml-4">
                {typeof item[0] === "string" && renderStringWithBold(item[0])}
                {Array.isArray(item.slice(1)) && renderList(item.slice(1))}
              </li>
            );
          } else {
            return (
              <li key={index} className="ml-4">
                {renderStringWithBold(item)}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  const renderStringWithBold = (str: string) => {
    const parts = str.split(/(<b>.*?<\/b>)/g);
    return parts.map((part, index) => {
      if (part.match(/<b>.*<\/b>/)) {
        return <b key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      } else {
        return part;
      }
    });
  };

  return renderList(items);
}

export { SubHeading, SubHeading2, UnorderedList };