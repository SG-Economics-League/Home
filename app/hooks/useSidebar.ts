import { useEffect, useState } from "react";

export default function useSidebar(sectionIds: string[], allSubsectionIds: string[]) {
    const [selected, setSelected] = useState("");
    const [selectedSub, setSelectedSub] = useState("");

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -80% 0px" }
        );
        const subObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedSub(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -80% 0px" }
        );
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });
        allSubsectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) subObserver.observe(el);
        });
        return () => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) sectionObserver.unobserve(el);
            });
            allSubsectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) subObserver.unobserve(el);
            });
        };
    }, [sectionIds, allSubsectionIds]);
    return { selected, selectedSub };
}