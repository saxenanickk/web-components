const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 7091;
const app = express();

// app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "progress-bar")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "progress-bar", "index.html"));
});

app.listen(port, () => console.log(`Progress Bar listening on port ${port}!`));
