import { MenuIcon, FileEditIcon } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FileEditIcon className="size-8 text-stone-300" />
                    <span className="text-2xl font-bold">CV Builder</span>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
                    <MenuIcon className="size-8" />
                    <span className="sr-only">Open menu</span>
                </button>
            </div>
        </nav>
    );
}
