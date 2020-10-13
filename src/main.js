const fetch = require("node-fetch");
const { id, token, data } = require("./config.json");
const url = `https://discord.com/api/webhooks/${id}/${token}`;

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(console.log("Attempting.. check channel or wait for error."))
.catch(console.error());
