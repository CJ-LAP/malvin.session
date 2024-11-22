const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Malvin_King,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LØRD_CÈËJÀY_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_LØRD_CÈËJÀY = Malvin_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_LØRD_CÈËJÀY.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_LØRD_CÈËJÀY.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_LØRD_CÈËJÀY.ev.on('creds.update', saveCreds)
            Pair_Code_By_LØRD_CÈËJÀY.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_LØRD_CÈËJÀY.sendMessage(Pair_Code_By_LØRD_CÈËJÀY.user.id, { text: '' + b64data });

               let LØRD_CÈËJÀY_TEXT = `
┏━━━━━━━━━━━━━━
| 𝙻𝙾𝚁𝙳_𝙲𝙴𝙴𝙹𝙰𝚈_𝙸𝙳 SESSION IS 
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
❻ || YouTube = https://www.youtube.com/@Demonic_CJ_Tech 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 𝙻𝙾𝚁𝙳_𝙲𝙴𝙴𝙹𝙰𝚈_`
 await Pair_Code_By_LØRD_CÈËJÀY.sendMessage(Pair_Code_By_LØRD_CÈËJÀY.user.id,{text:LØRD_CÈËJÀY_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_LØRD_CÈËJÀY.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LØRD_CÈËJÀY_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await LØRD_CÈËJÀY_PAIR_CODE()
});
module.exports = router
