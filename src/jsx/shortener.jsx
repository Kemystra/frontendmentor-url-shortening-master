const RESULT_PANEL_CLASS = "shortener-result-panel";
const RESULT_PANEL_WAIT_CLASS = "shortener-result-panel--wait";

// The original cleanURI API does not support CORS
// Need to have a proxy server to access the API
// Using Netlify Function to serve that
const URL_SHORTENER_ENDPOINT = "/shorten-url";

class URLPair {
	constructor(longURL) {
		this.longURL = longURL;
	}
}

const Shortener = () => {
	async function handleSubmit(e) {
		e.preventDefault();

		let originalURL = shortenerURLInput.value.trim();

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

	return (
		<>
			<form action="" className="shorten-section__form" onSubmit={handleSubmit}>
				<div className="shorten-section__url-field url-field">
					<input placeholder="Shorten a link here..." type="url" className="url-field__input" />
					<p className="url-field__error-msg">Please add a link</p>
				</div>
				<button className="shorten-section__process-btn">Shorten It!</button>
			</form>
		</>
	)
}

const ResultPanel = () => {
	return <div className={RESULT_PANEL_CLASS + " " + RESULT_PANEL_WAIT_CLASS}></div>
}

export default Shortener;
