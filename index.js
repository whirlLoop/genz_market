import React from "react";
import { render } from "react-dom";

function Test() {
	return <h1>Hello World!</h1>;
}

render(<Test />, document.getElementById("app"));
