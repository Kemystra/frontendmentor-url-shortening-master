const SHORTEN_ENDPOINT = "https://cleanuri.com/api/v1/shorten";

export default async (req, context) => {
	const requestedURL = await streamToString(req.body);

	const response = await fetch(SHORTEN_ENDPOINT, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: requestedURL
	});

	return await response.json();
}

async function streamToString(stream) {
    const chunks = [];

    for await (const chunk of stream) {
        chunks.push(Buffer.from(chunk));
    }

    return Buffer.concat(chunks).toString("utf-8");
}

export const config = {
	path: "/shorten-url"
};
