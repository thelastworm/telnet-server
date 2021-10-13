var telnet = require('telnet')
 
telnet.createServer(function (client) {
 
  // make unicode characters work properly
  client.do.transmit_binary()
 
 
  // listen for the actual data from the client
  client.on('data', function (b) {
    client.write(b)
  })
 
  client.write('connected to Telnet server!')
 
}).listen(23)

