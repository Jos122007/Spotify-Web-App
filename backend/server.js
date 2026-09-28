const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/songs", (req, res) => {
    res.json([
        {
            id: 1,
            name: "My Song",
            artist: "My Artist"
        },
        {
            id: 2,
            name: "Favorite Song",
            artist: "My Favorite Artist"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Spotify Web App running at http://localhost:${PORT}`);
});