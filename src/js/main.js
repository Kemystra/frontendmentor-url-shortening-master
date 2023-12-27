const ATTRIBUTION_BG_ID = "attribution-bg";
const HIDDEN_ATTRIBUTION_CLASS = "attribution--hidden";
const MOCK_BUTTON_CLASS = "mock-btn";

let attribution_bg = document.getElementById(ATTRIBUTION_BG_ID);
attribution_bg.onclick = () => { attribution_bg.classList.add(HIDDEN_ATTRIBUTION_CLASS); }

function showAttribution() {
	attribution_bg.classList.remove(HIDDEN_ATTRIBUTION_CLASS);
	console.log("Showing Attr...")
}

for (let btn of document.getElementsByClassName(MOCK_BUTTON_CLASS)) {
	btn.onclick = showAttribution;
}
