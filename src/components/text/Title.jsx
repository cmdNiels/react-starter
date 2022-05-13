import React from "react";

export default function Title(props) 
{
	return (
		<>
			<h1 className="text-3xl mb-3 font-semibold text-gray-100">
				{props.text}
			</h1>
		</>
	);
}