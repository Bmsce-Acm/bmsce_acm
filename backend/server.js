const app = require('./app');

// ! Handle UnCaught Exceptions
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Uncaught Exceptions`);
	process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config({ path: "backend/config/config.env" });
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
