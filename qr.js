const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: LØRD_CËËJÀY,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function LØRD_CËËJÀY_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_LØRD_CËËJÀY = LØRD_CËËJÀY({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_LØRD_CËËJÀY.ev.on('creds.update', saveCreds)
			Qr_Code_By_LØRD_CËËJÀY.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_LØRD_CËËJÀY.sendMessage(Qr_Code_By_LØRD_CËËJÀY.user.id, { text: '' + b64data });
	
				   let LØRD_CËËJÀY_TEXT = `
┏━━━━━━━━━━━━━━
┃𝙻𝙾𝚁𝙳_𝙲𝙴𝙴𝙹𝙰𝚈_𝙸𝙳 SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ 𝙻𝙾𝚁𝙳_𝙲𝙴𝙴𝙹𝙰𝚈 ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/2348138621982


▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/CJ-LAP/DEMONIC-CJ-V3 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@Demonic-CJ-Tech 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 𝙻𝙾𝚁𝙳_𝙲𝙴𝙴𝙹𝙰𝚈_`
	 await Qr_Code_By_LØRD_CËËJÀY.sendMessage(Qr_Code_By_LØRD_CËËJÀY.user.id,{text:LØRD_CËËJÀY_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_LØRD_CËËJÀY.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					LØRD_CËËJÀY_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await LØRD_CËËJÀY_QR_CODE()
});
module.exports = router
