const { connect } = require("http2");

let connection;
const stdin = process.stdin;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function (data) {
  if (data === '\u0003') { //input for ctrl C
    process.exit()
  }

  const taunt = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035'];// input for 1, 2, 3, 4, 5

  if (taunt.includes(data)) {
    switch (data) {
      case taunt[0]:
        connection.write("Say: Foolish fool!\n");
        break;
      case taunt[1]:
        connection.write("Say: Did I win?\n");
        break;
      case taunt[2]:
        connection.write("Say: OBJECTION!!!\n");
        break;
      case taunt[3]:
        connection.write("Say: And then...\n");
        break; 
      case taunt[4]:
        connection.write("Say: there were none\n");
        break;
    }
  }


  const wasdInputs = ['\u0077', '\u0061', '\u0073', '\u0064'] //inputs for w a s d respectively

  if (wasdInputs.includes(data)) {
    // 
    switch (data) {
      case wasdInputs[0]:
        connection.write("Move: up\n");
        break;
      case wasdInputs[1]:
        connection.write("Move: left\n");
        break;
      case wasdInputs[2]:
        connection.write("Move: down\n");
        break;
      case wasdInputs[3]:
        connection.write("Move: right\n");
        break;
      default:
        break;
    }
  }
};

stdin.on("data", handleUserInput)

module.exports = {
  setupInput,
  handleUserInput
}