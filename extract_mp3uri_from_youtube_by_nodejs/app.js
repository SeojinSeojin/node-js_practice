const ytdl = require('ytdl-core');
const videoUrl = "https://www.youtube.com/watch?v=ZeerrnuLi5E";

async function getMP3URI(videoUrl) {
    // check https://github.com/fent/node-ytdl-core/blob/HEAD/typings/index.d.ts to see variable names
    const getinfo = await ytdl.getInfo(videoUrl);
    const adaptiveFormats = getinfo.formats;
    const audioFormat = adaptiveFormats.filter(format => String(format["mimeType"]).substring(0, 9) === "audio/mp4")[0];

    return audioFormat.url
}

// use anywhere
getMP3URI(videoUrl)