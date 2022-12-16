import { NavLink } from "./ui/NavLink"
import React from "react"

interface HeaderProps {
    hasNavbar?: boolean,
    logoText: string
}

export const Header = ({ logoText, hasNavbar=true } : HeaderProps) => {
	return (
		<header className="col-span-3 flex items-center justify-between px-6 py-4 border-b-2">
			<p className="mr-auto">{logoText}</p>
            {
                hasNavbar
                &&
                <nav className="flex gap-6 items-center">
                    <NavLink text={"Home"} link={"/"}  />
                    <NavLink text={"Community"} link={"/"}  />
                    <NavLink text={"Marketplace"} link={"/"}  />
                    <NavLink text={"About"} link={"/"}  isActive={false}/>
                </nav>
            }
			<button className="ml-auto">Login</button>
		</header>
	)
}
