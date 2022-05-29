import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootJS = ReactDOM.createRoot(document.getElementById("root"));

rootJS.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
