import DrawerMenu from "./drawerMenu";

export default function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <nav className="px-5 lg:px-10 py-5 sticky top-0 z-50 bg-inherit">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex justify-center items-center gap-2"><h4 className="text-xl font-bold">Jayendra.</h4> <span className="text-sm bg-brutal-background rounded-full px-3 p-1 border-2 border-black font-semibold">dev</span></div>
                <ul className="space-x-4 gap-4 font-semibold  hidden lg:flex">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">{link.name}</a>
                        </li>
                    ))}
                </ul>
                <DrawerMenu />
            </div>
        </nav>
    );
}