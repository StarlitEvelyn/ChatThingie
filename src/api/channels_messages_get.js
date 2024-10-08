const getMessage = require("../database/channels_messages_get");

module.exports = (app, io) => {
	app.get("/channels/:channel/messages", async (req, res) => {
		const { channel } = req.params;

		if (!channel) return res.status(400).send({ message: 'Missing channel ID!' });

		res.send(await getMessage(channel));
	});
};
