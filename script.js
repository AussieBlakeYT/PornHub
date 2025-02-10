// Get the video ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const videoID = urlParams.get('videoID');

if (videoID) {
    // Set the iframe source to the YouTube embed link
    document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${videoID}`;
    
    // Predefined video titles & descriptions
    const videoData = {
        "-Gqbm0XQo1Y": { title: "Video 1", desc: "Description for Video 1" },
        "mufeRQYgqZc": { title: "Video 2", desc: "Description for Video 2" },
        "0e3GPea1Tyg": { title: "Video 3", desc: "Description for Video 3" },
        "IzykiEcBoRM": { title: "Video 4", desc: "Description for Video 4" },
        "bffDpzeCgAA": { title: "Video 5", desc: "Description for Video 5" }
    };

    if (videoData[videoID]) {
        document.getElementById('videoTitle').textContent = videoData[videoID].title;
        document.getElementById('videoDesc').textContent = videoData[videoID].desc;
    }
}
