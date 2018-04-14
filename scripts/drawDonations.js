try {
	config = require(process.env.CONFIG_PATH);
	process.env.NODE_ENV = config.environment;
	console.log(config);
} catch (e) {
	console.log(e);
	process.exit(1);
}