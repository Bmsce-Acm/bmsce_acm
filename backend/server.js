// const app = require('./app');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "backend/config/config.env" });

const app = express();
// if (process.env.NODE_ENV !== "production") {
// 	require("dotenv").config({ path: "backend/config/config.env" });
// }

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// ! Handle UnCaught Exceptions
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Uncaught Exceptions`);
	process.exit(1);
});

__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'frontend/build')))
	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
	app.get('/', (req, res) => {
		res.send('Server is running')
	})
}

const server = app.listen(process.env.PORT, () => {
	console.log(
		`Server Activated: http://localhost:${process.env.PORT}`
	);
});

process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(
		`Shutting down the server due to Unhandled Promise Rejection`
	);
	server.close(() => {
		process.exit(1);
	});
});
