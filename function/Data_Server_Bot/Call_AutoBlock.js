const fs = require("fs");

exports.auto_BlockCaller = async (conn, json) => {
   if (json && Array.isArray(json.content) && json.content[0] && json.content[0].attrs && json.content[0].attrs["call-creator"] && conn && conn.updateBlockStatus) {
      const user_Call = json.content[0].attrs["call-creator"];
      conn.sendMessage(user_Call, { text: "Maaf, Anda terdeteksi menggunakan bot telepon!\nDalam 5 detik, Anda akan diblokir secara otomatis oleh bot." });
      await sleep(5000);
      conn.updateBlockStatus(user_Call, "block");
   } else {
      // manajemen error
   }
};
