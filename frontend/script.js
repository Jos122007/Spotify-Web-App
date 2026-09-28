async function loadSongs() {
    try {
        const response = await fetch("/api/songs");
        const songs = await response.json();

        const songsContainer = document.getElementById("songs");

        songsContainer.innerHTML = "";

        songs.forEach(song => {
            songsContainer.innerHTML += `
                <div class="song-card">

                    <div class="song-image">
                        🎵
                    </div>

                    <h3>${song.name}</h3>

                    <p>${song.artist}</p>

                    <button class="play-btn"
                        onclick="playSong('${song.name}')">
                        ▶ Play
                    </button>

                </div>
            `;
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

function playSong(songName) {
    alert("▶ Playing: " + songName);
}

function searchSong() {
    const search = document
        .getElementById("searchInput")
        .value
        .trim();

    if (search === "") {
        alert("Please enter a song name");
        return;
    }

    alert("🔍 Searching for: " + search);
}

loadSongs();