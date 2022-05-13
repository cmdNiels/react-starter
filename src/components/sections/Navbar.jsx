import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";

export default function Navbar({ pages })
{
	const [menu, setMenu] = useState(false);

	const switchMenu = () =>
	{
		setMenu(!menu);
	}

	return (
		<>
			<header className="text-main-100 bg-main-800 shadow-sm">
				<div className="p-3 flex-row items-center flex-no-wrap overflow-hidden md:flex hidden">
					<div className="mr-2 hover:bg-main-700 px-3 py-2 rounded-md h-10">
						<Link to="/">
							<p className="font-semibold">
								cmdNiels
							</p>
						</Link>
					</div>
					<div className="ml-auto flex">
						{
							pages.map(i => (
								<>
									<div className="ml-5" />
									<NavbarButton href={"/" + i.toLowerCase()} text={i.charAt(0).toUpperCase() + i.slice(1)} />
								</>
							))
						}
					</div>
				</div>
				<div className="p-3 md:hidden flex flex-col">
					<button onClick={switchMenu} className="focus:outline-none">
						<div className="hover:bg-main-700 px-3 py-2 rounded-md">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="24" height="24"
								viewBox="0 0 24 24"
								className="text-main-100 fill-current">
								<path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
							</svg>
						</div>
					</button>
					{
						menu &&
						<div onClick={switchMenu} className="pt-1 md:hidden flex flex-col">
							{
								pages.map(i => (
									<NavbarButton href={"/" + i.toLowerCase()} text={i.charAt(0).toUpperCase() + i.slice(1)} />
								))
							}
						</div>
					}
				</div>

			</header>
		</>
	);
}