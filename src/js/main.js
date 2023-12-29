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

const SHORTENER_SECTION_ID = "shortener-section";
const SHORTENER_FORM_ID = "shortener-form";
const SHORTENER_URL_INPUT_ID = "url-field";

let shortenedURLs = [];
let shortenerSection = document.getElementById(SHORTENER_SECTION_ID);
let shortenerForm = document.getElementById(SHORTENER_FORM_ID);
let shortenerURLInput = document.getElementById(SHORTENER_URL_INPUT_ID);

shortenerForm.onsubmit = e => {
	e.preventDefault();
	alert(shortenerURLInput.value);
}
