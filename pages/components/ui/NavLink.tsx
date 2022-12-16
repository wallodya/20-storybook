import React from "react"

interface NavLinkProps {
	text: string
	link: string
	isActive?: boolean
}

export const NavLink = ({ text, link, isActive=true }: NavLinkProps) => {
	return <a 
        aria-disabled
        href={link}
        className={
            "font-bold "
            +
            (
                isActive
                    ? 
                    "hover:border-b-2 hover:text-sky-800 transition"
                    :
                    "text-gray-500 pointer-events-none"
            )
        }
    >
        {text}
    </a>
}
