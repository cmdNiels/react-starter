import React from "react";
import { Link } from "react-router-dom";

export default function NavbarButton(props)
{
    return (
        <>
            <Link to={props.href} className="ml-5 hover:bg-main-700 px-3 py-2 rounded-md">
                {props.text}
            </Link>
        </>
    );
}