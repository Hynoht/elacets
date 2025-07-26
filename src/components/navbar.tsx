import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import ThemeSwitcher from "./theme-switcher";
import { Languages } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu";
import LanguageSwitcher from "./language-switcher";
import Image from 'next/image';

export default function Navbar() 
{
    return (
        <div className="flex w-full z-10 justify-between items-center p-2 border">
            <a href="/">
                <Image className="relative"
                    src="/logo.png"
                    alt="elacet"
                    width={100}
                    height={10}
                />
            </a>
            <div className="flex items-center justify-between gap-4">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}