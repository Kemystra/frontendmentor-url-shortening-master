import React from "react";


const RESULT_PANEL_CLASS = "shorten-section__result-panel";
const RESULT_PANEL_WAIT_CLASS = "shorten-section__result-panel--wait";
const RESULT_PANEL_LONG_URL_CLASS = "shorten-section__result-long-url";

// The original cleanURI API does not support CORS
// Need to have a proxy server to access the API
// Using Netlify Function to serve that
const URL_SHORTENER_ENDPOINT = "/shorten-url";

const INFO = "info";
const ERROR = "error";

class NotificationData {
	constructor(type, content) {
		this.type = type;
		this.content = content;
		this.id = crypto.randomUUID();
	}
}

const Shortener = () => {
	const [url, setURL] = React.useState("");
	const [urlList, setUrlList] = React.useState([]);
	const [notifList, setNotifList] = React.useState([]);

	// setState is async
	// useEffect will guarantee to re-render on state change
	React.useEffect(() => {
	}, [urlList, notifList]);

	function handleSubmit(e) {
		e.preventDefault();
		setUrlList(prevList => [{id: crypto.randomUUID(), url}, ...prevList]);
		setURL("");
	}

	function handleNotify(data) {
		setNotifList(prevList => [data, ...prevList]);
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
			{urlList.map((url_data) => {
				return <ResultPanel key={url_data.id} longURL={url_data.url} onNotify={handleNotify}/>
			})}
			<div className="notification-container">
				{notifList.map((notifData) => {
					return <Notification key={notifData.id} data={notifData}/>
				})}
			</div>
		</>
	)
}

const ResultPanel = props => {
	const [shortenedURL, setShortenedURL] = React.useState("");
	React.useEffect(() => {
		fetch(URL_SHORTENER_ENDPOINT, {
			method: "POST",
			body: `url=${encodeURIComponent(props.longURL)}`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		})
		.then((resp) => resp.json())
		.then((data) => {
			if (data.result_url) {
				setShortenedURL(data.result_url);
				props.onNotify(new NotificationData(INFO, "URL Shortened!"));
			}
			else if (data.error) {
				props.onNotify(new NotificationData(ERROR, data.error));
			}
		})
		.catch((err) => {
				props.onNotify(new NotificationData(ERROR, JSON.stringify(err, null, 2)));
			});

	}, []);

	return (
		<div className={`${RESULT_PANEL_CLASS} ${shortenedURL ? "" : RESULT_PANEL_WAIT_CLASS}`}>
			{shortenedURL && <>
				<p className={RESULT_PANEL_LONG_URL_CLASS}>{props.longURL}</p>
				<p>{shortenedURL}</p>
			</>}
		</div>
	)
}

const Notification = ({ data: {type, content}, ..._ }) => {
	const [isExpired, setIsExpired] = React.useState(false);

	function handleAnimationEnd(e) {
		if (e.animationName === "slideOut") {
			setIsExpired(true);
		}
	}

	if (isExpired) { return null }

	return <div className={`notification notification--${type}`} onAnimationEnd={handleAnimationEnd}>
		<p>{content}</p>
	</div>
}

export default Shortener;
