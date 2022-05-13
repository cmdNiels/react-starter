import React from "react";
import "./assets/css/output.css";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Navbar from "./components/sections/Navbar";

import Home from "./views/Home";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";

const queryClient = new QueryClient();

function App() 
{
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<section className="bg-main-700">
						<Navbar pages={[
							"Page1",
							"Page2",
							"Page3"
						]} />
						<div className="flex flex-wrap p-5 flex-row items-center">
							<div className="container px-1 min-w-full">
								<Route exact path="/" component={Home} />
								<Route exact path="/page1" component={Page1} />
								<Route exact path="/page2" component={Page2} />
								<Route exact path="/page3" component={Page3} />
							</div>
						</div>
					</section>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
