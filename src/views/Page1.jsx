import React from "react";
import Title from "../components/text/Title";
import SubTitle from "../components/text/SubTitle";
import Button from "../components/buttons/Button";

export default function Index() 
{
	return (
		<>
			<Title text="Page 1" />
			<SubTitle text="Page 1" />
			<br />
			<Button href="/" />
		</>
	);
}