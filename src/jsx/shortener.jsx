const SHORTENER_FORM_ID = "shortener-form";
const SHORTENER_URL_INPUT_ID = "url-shortener-input";

const RESULT_PANEL_CLASS = "shortener-result-panel";
const RESULT_PANEL_WAIT_CLASS = "shortener-result-panel--wait";

// The original cleanURI API does not support CORS
// Need to have a proxy server to access the API
// Using Netlify Function to serve that
const URL_SHORTENER_ENDPOINT = "/shorten-url";

let shortenedURLs = [];
let shortenerSection = document.getElementById(SHORTENER_SECTION_ID);
let shortenerForm = document.getElementById(SHORTENER_FORM_ID);
let shortenerURLInput = document.getElementById(SHORTENER_URL_INPUT_ID);

class URLPair {
	constructor(longURL) {
		this.longURL = longURL;
		this.shortenedURL = "";
	}
}

shortenerForm.onsubmit = async e => {
	e.preventDefault();

	let originalURL = shortenerURLInput.value.trim();

	let resultPanel = document.createElement("div");
	resultPanel.classList.add(RESULT_PANEL_CLASS, RESULT_PANEL_WAIT_CLASS);
	shortenerSection.appendChild(resultPanel);

	try {
		const response = await fetch(URL_SHORTENER_ENDPOINT, {
			method: "POST",
			body: `url=${originalURL}`
		});
		const result = await response.json();
		alert(result);
	}

	catch(error) {
		console.log(error);
	}
}
