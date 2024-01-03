import React from "react";
import ReactDOM from "react-dom/client";
import Shortener from "./shortener.jsx";

"use strict"

const ATTRIBUTION_BG_ID = "attribution-bg";
const HIDDEN_ATTRIBUTION_CLASS = "attribution--hidden";
const MOCK_BUTTON_CLASS = "mock-btn";

let attributionBG = document.getElementById(ATTRIBUTION_BG_ID);
attributionBG.onclick = hideAttribution;

function showAttribution() {
	attributionBG.classList.remove(HIDDEN_ATTRIBUTION_CLASS);
}

function hideAttribution() {
	attributionBG.classList.add(HIDDEN_ATTRIBUTION_CLASS);
}

for (let btn of document.getElementsByClassName(MOCK_BUTTON_CLASS)) {
	btn.onclick = showAttribution;
}

// React for shortener component
const SHORTENER_SECTION_ID = "shortener-section";
ReactDOM.createRoot(document.getElementById(SHORTENER_SECTION_ID)).render(
	<React.StrictMode>
		<Shortener />
	</React.StrictMode>
);
