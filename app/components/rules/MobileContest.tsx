import { sectionData } from "@/app/data/rules";
import { useEffect, useState } from "react";
import MenuArrowIcon from "../icons/MenuArrowIcon";

export default function MobileContents({ selected, selectedSub }: { selected?: string; selectedSub?: string }) {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
      setLastScrollY(currentY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        document.body.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    }, 300); 
  };
  

  return (
    <div
      className={`
        lg:hidden w-full px-4 mt-4
        transition-transform duration-300
        ${showBar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="bg-white border-2 border-primary rounded shadow overflow-hidden">
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 flex items-center justify-between">
          <span className="font-bold text-lg">Contents</span>
          <button className="text-xl font-bold">
            <MenuArrowIcon isExpanded={isOpen} />
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] overflow-y-auto" : "max-h-0"}`}>
          <ul className="flex flex-col space-y-1 p-4">
            {sectionData.map(({ id, subsections }) => {
              const hasSubsections = subsections.length > 0;
              const isExpanded = expandedSections.has(id);
              return (
                <li key={id}>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleScrollTo(id)}
                      className="flex-1 text-primary font-semibold text-left slab py-1"
                    >
                      {id}
                    </button>
                    {hasSubsections && (
                      <button
                        onClick={() => toggleSection(id)}
                        className="p-1 text-baseText hover:text-secondary transition-colors"
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
                      <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-[#D0D0D0] pl-2">
                        {subsections.map((sub) => {
                          const isSubActive = selectedSub === sub;
                          return (
                            <li key={sub}>
                              <button
                                onClick={() => handleScrollTo(sub)}
                                className={`block w-full text-left py-1 px-2 text-sm rounded transition-colors ${
                                  isSubActive
                                    ? "text-secondary font-semibold"
                                    : "text-baseText/70 hover:underline hover:text-baseText"
                                }`}
                              >
                                {sub}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}