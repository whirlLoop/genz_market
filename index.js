import React from "react";
import { createRoot } from "react-dom/client";

function Test() {
	return <h1>Hello World!</h1>;
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<Test />);
