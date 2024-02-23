const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  `localhost`,
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => { // prints below when connection is made.
    console.log("Let the games begin!!!")
  });

  conn.on("connect", () => { // prints below when connection is made.
    console.log("Name: Ike")
  });

  // conn.on("connext", () => {
  //   console.log("Move: up")
  // } )

  return conn;
};

const stdin = process.stdin;

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  if (key === '\u0003') {
    console.log("game is over")
 
  }
};


stdin.on("data", handleUserInput)

console.log("Connecting ...");
connect();

module.exports = {
  connect,
  setupInput,
  handleUserInput
}