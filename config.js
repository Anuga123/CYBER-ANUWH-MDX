const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put your session id here",
ALIVE_IMG: process.env.ALIVE_IMG || "https://postimg.cc/nX6ZH38b",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO I AM CYBER ANUWH MDX V1 MADE BY JAVA SCRIPT BY CYBER ANUWH &I AM ALIVE NOW 😀😀<NOW ALIVE> ",
};
