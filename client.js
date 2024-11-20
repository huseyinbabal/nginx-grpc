const { HelloRequest } = require("./helloworld_pb");
const { GreeterClient, GreeterPromiseClient } = require("./helloworld_grpc_web_pb");

const XMLHttpRequest = require('xhr2');
global.XMLHttpRequest = XMLHttpRequest;

// Connect to the gRPC-web proxy
const client = new GreeterPromiseClient('http://localhost:8080', null, {
  'grpc.max_receive_message_length': 100 * 1024 * 1024, // 100MB
  'grpc.max_send_message_length': 100 * 1024 * 1024    // 100MB
});

// Create request
const request = new HelloRequest();
request.setName("World");

// Call SayHello
client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(response.getMessage());
  }
});
