/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
// import { Link } from "@reach/router";

export default class error extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			hasError: false,
			error: undefined,
			message: undefined,
			type: undefined,
		};
	}
	static getDerivedStateFromError(error)
	{
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}
	componentDidCatch(error, info)
	{
		console.log("ErrorBoundary caught an error", error.message, info);
		// this.state;
		this.setState({ message: error.message, type: error.stack });
	}

	render()
	{
		if (this.state.hasError)
		{
			return (
				<div className="containerError">
					{process.env.NODE_ENV === "development" ? (
						<>
							{/* <h1>There was an error with this check Developer Console</h1> */}
							<p>
								<pre>{this.state.type} </pre>
							</p>
						</>
					) : (
						<>
							<h2>
								{/* Oopps an Error Occured go <Link to="/"> Home </Link>{" "} */}
							</h2>
						</>
					)}
				</div>
			);
		}

		return this.props.children;
	}
}
