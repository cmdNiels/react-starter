/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import ErrorWrapper from "./ErrorWrapper";

ReactDOM.render(
	<React.StrictMode>
		<ErrorWrapper>
			<App />
		</ErrorWrapper>
	</React.StrictMode>,
	document.getElementById("root")
);
