import React from "react";

export default function Title({ text }) 
{
	return (
		<>
			<h1 className="text-3xl mb-3 font-semibold text-gray-100">
				{text}
			</h1>
		</>
	);
}