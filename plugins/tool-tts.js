const { cmd } = require("../command");
const googleTTS = require("google-tts-api");

cmd({
  pattern: "tts",
  alias: ["say"],
  desc: "Convert text to speech",
  category: "tools",
  react: "🔊",
  filename: __filename,
  use: ".tts <text>"
}, async (conn, m, store, { from, q, reply }) => {
  try {

    if (!q) {
      return reply("❌ Please provide some text.\n\nExample:\n.tts Hello World");
    }

    const url = googleTTS.getAudioUrl(q, {
      lang: "en",
      slow: false,
      host: "https://translate.google.com"
    });

    await conn.sendMessage(
      from,
      {
        audio: { url },
        mimetype: "audio/mpeg",
        ptt: false
      },
      { quoted: m }
    );

  } catch (err) {
    console.log("TTS ERROR:", err);
    reply(`❌ Error: ${err.message}`);
  }
});
