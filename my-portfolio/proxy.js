const express = require("express");
const corsAnywhere = require("cors-anywhere");

const app = express();
const port = 8080;

const proxy = corsAnywhere.createServer({
    originWhitelist: [], // Allow all domains
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
});

app.use("/", (req, res) => {
    req.url = req.url.replace(/^\/https?:\/\//, ""); // Remove extra slashes
    proxy.emit("request", req, res);
});

app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
