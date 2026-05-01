interface NavigationPage {
    name: string;
    href: string;
}
const navigationPages: NavigationPage[] = [ 
    { name: "Home", href: "/" },
    { name: "Rules", href: "/rules" },
    { name: "FAQ", href: "/faq" },
    { name: "Syllabus", href: "/syllabus" },
    { name: "Practise", href: "/practise" },
]

export default navigationPages;
export type { NavigationPage };