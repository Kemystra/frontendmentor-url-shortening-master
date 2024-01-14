import React from "react";
import { useRenderCount } from "@uidotdev/usehooks";

const RESULT_PANEL_CLASS = "shortener-result-panel";
const RESULT_PANEL_WAIT_CLASS = "shortener-result-panel--wait";

// The original cleanURI API does not support CORS
// Need to have a proxy server to access the API
// Using Netlify Function to serve that
const URL_SHORTENER_ENDPOINT = "/shorten-url";

class URLPair {
	constructor(longURL, promisedURL) {
		this.longURL = longURL;
		this.promisedURL = promisedURL;
	}
}

const Shortener = () => {
	const [url, setURL] = React.useState("");
	const [urlList, setURLList] = React.useState([]);

	function handleSubmit(e) {
		e.preventDefault();

		let fetchPromise = fetch(URL_SHORTENER_ENDPOINT, {
			method: "POST",
			body: `url=${url}`
		});
		fetchPromise.then(
			response => setURLList([
				...urlList, new URLPair(url, response.json())
			])
		);
	}

	return (
		<>
			<form action="" className="shorten-section__form" onSubmit={handleSubmit}>
				<div className="shorten-section__url-field url-field">
					<input placeholder="Shorten a link here..." type="url"
						value={url} onChange={(e) => setURL(e.target.value)} className="url-field__input" />
					<p className="url-field__error-msg">Please add a link</p>
				</div>
				<button className="shorten-section__process-btn">Shorten It!</button>
			</form>
			{urlList.map((pair, index) => {
				return <ResultPanel key={index} urlPair={pair}/>
			})}
		</>
	)
}

const ResultPanel = ({ urlPair }) => {
	const [shortenedURL, setShortenedURL] = React.useState("");
	const renderCount = useRenderCount();

	urlPair.promisedURL.then(resp => {
		setShortenedURL(resp.result)
	});

	console.log(renderCount);

	return (
		<div className={`${RESULT_PANEL_CLASS} ${shortenedURL ? "" : RESULT_PANEL_WAIT_CLASS}`}>
			{shortenedURL && <>
				<p>{urlPair.longURL}</p>
				<p>{shortenedURL}</p>
			</>}
		</div>
	)
}

export default Shortener;
