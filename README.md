Example gRPC client and server in Node.js with Nginx in between

## Prerequisites
- Node.js
- Nginx
- protoc

## Install dependencies
```bash
npm install -g grpc-web
npm install -g protoc-gen-js
npm install -g protoc-gen-grpc-web
```

## Nginx
Install nginx and start it with the `nginx.conf` file provided in this repository.

## Generate gRPC code
```bash
protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcweb:. helloworld.proto
```

## Run the server
```bash
GRPC_VERBOSITY=DEBUG GRPC_TRACE=all node server.js
```

## Run the client
```bash
node client.js
```