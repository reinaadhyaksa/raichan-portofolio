import { DesktopNavbar, MobileNavbar } from "./ui/ui";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-10" data-aos="fade-down">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">Portofolio</span>
                    </div>
                    <DesktopNavbar />
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <i className="fas fa-bars text-gray-700 text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <MobileNavbar />
        </nav>
    )
}