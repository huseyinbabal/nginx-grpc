const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Load protobuf
const packageDefinition = protoLoader.loadSync("helloworld.proto", {});
const proto = grpc.loadPackageDefinition(packageDefinition).Greeter;

// Implement the SayHello RPC
function sayHello(call, callback) {
  callback(null, { message: `Hello, ${call.request.name}` });
}

// Initialize server
const server = new grpc.Server({
  "grpc.max_receive_message_length": -1,
    "grpc.max_send_message_length": -1
});
server.addService(proto.service, { SayHello: sayHello });
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running at http://0.0.0.0:50051");
});
