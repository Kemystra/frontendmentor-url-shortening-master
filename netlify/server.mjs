import express from "express";
import handler from "./functions/shorten-url.mjs";

const app = express();
const port = 3000;

app.post('/shorten-url', (req, res) => {
	console.log(`Request received: ${req.originalUrl}`)
	res.send({
		"result": "damn, son"
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
