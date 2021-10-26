var telnet = require('telnet')
 
telnet.createServer(function (client) {
 
  // make unicode characters work properly
  client.do.transmit_binary()
 
  // listen for the actual data from the client
  client.on('data', function (b) {
    var cmd = b.toString()
    var result = "OK \n"
    if(cmd === "VER\r") {
      result += "VERSION: \n" 
      result += "FD42140197 V:001.001 \n"
    } else if(cmd === "BYE\r") {
      result += "BYE BYE \r"
    } else if (cmd.includes("CFG 0 13")) {
      result += "Extended Code Set \n"
    }
    client.write(result)
    console.log(cmd)
    console.log(result)
    console.log("-----------\n")
  })
}).listen(2300)

