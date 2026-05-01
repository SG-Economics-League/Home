import { sectionData } from "@/app/data/rules";
import { useEffect, useState } from "react";
import MenuArrowIcon from "../icons/MenuArrowIcon";

export default function SideBar({ selected, selectedSub }: { selected?: string; selectedSub?: string }) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (selected) {
      const section = sectionData.find((s) => s.id === selected);
      if (section && section.subsections.length > 0) {
        setExpandedSections((prev) => new Set([...prev, selected]));
      }
    }
  }, [selected]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    console.log(el)
    if (el) {
      const offset = 80;
      console.log( el.getBoundingClientRect().top + window.scrollY - offset )
      document.body.scrollBy({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="hidden lg:block top-24 self-start h-fit w-120">
      <div className="flex flex-col gap-1 border-b-2 lg:border-b-0 border-[#D0D0D0] px-2 py-4 lg:py-8">
        {sectionData.map(({ id, subsections }) => {
          const isActive = selected === id;
          const isExpanded = expandedSections.has(id);
          const hasSubsections = subsections.length > 0;
          return (
            <div key={id}>
              <div className="flex items-center">
                <button
                  onClick={() => handleScroll(id)}
                  className={`flex-1 text-left px-3 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "bg-secondary border-2 border-[#272a30] text-white font-semibold"
                      : "hover:underline text-baseText"
                  }`}
                >
                  {id}
                </button>
                {hasSubsections && (
                  <button
                    onClick={() => toggleSection(id)}
                    className="p-1 ml-1 text-baseText hover:text-secondary transition-colors rounded"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    <MenuArrowIcon isExpanded={isExpanded} />
                  </button>
                )}
              </div>
              {hasSubsections && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-[#D0D0D0] pl-2">
                    {subsections.map((sub) => {
                      const isSubActive = selectedSub === sub;
                      return (
                        <button
                          key={sub}
                          onClick={() => handleScroll(sub)}
                          className={`block w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                            isSubActive
                              ? "text-secondary font-semibold"
                              : "text-baseText/70 hover:text-baseText hover:underline"
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}