const net = require("net");
const { IP, PORT} = require('./constants')
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  IP, 
    port: PORT
 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // prints below when connection is made.
    console.log("Let the games begin!!!")
    conn.write("Name: Ike\n");
  });

  return conn;
};

module.exports = {
  connect,
}