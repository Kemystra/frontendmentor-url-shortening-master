const ATTRIBUTION_BG_ID = "attribution-bg";
const HIDDEN_ATTRIBUTION_CLASS = "attribution--hidden";

let attribution_bg = document.getElementById(ATTRIBUTION_BG_ID);

attribution_bg.onclick = () => { attribution_bg.classList.add(HIDDEN_ATTRIBUTION_CLASS); }
