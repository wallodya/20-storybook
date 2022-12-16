import { NavLink } from "./ui/NavLink"
import React from "react"
export const Header = () => {
	return (
		<header className="col-span-3 flex items-center justify-between px-6 py-4 border-b-2">
			<p>Logo</p>
			<nav className="mx-auto flex gap-6 items-center">
				<NavLink text={"Home"} link={"/"}  />
				<NavLink text={"Community"} link={"/"}  />
				<NavLink text={"Marketplace"} link={"/"}  />
				<NavLink text={"About"} link={"/"}  isActive={false}/>
			</nav>
			<button className="">Login</button>
		</header>
	)
}
