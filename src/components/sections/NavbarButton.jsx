import React from "react";
import { Link } from "react-router-dom";

export default function NavbarButton({ text, href })
{
    return (
        <>
            <Link to={href} className="hover:bg-main-700 px-3 py-2 rounded-md">
                {text}
            </Link>
        </>
    );
}