{
  "private": true,
  "scripts": {
    "tsc": "tsc",
    "start": "node build/my-express-server.js",
    "dev": "nodemon build/my-express-server.js",
    "devRest": "nodemon build/auction-rest-server.js",
    "restServer": "nodemon build/auction-rest-server-angular.js",
    "simpleWsServer": "node build/simple-websocket-server.js",
    "twowayWsServer": "nodemon build/two-way-websocket-server.js",
    "bidServer": "nodemon build/bids/bid-server.js"
  },
  "dependencies": {
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/router": "3.0.0",
    "@types/express": "^4.0.31",
    "@types/node": "^4.0.30",
    "aws-sdk": "^2.7.21",
    "core-js": "^2.4.0",
    "express": "^4.14.0",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.37",
    "ws": "^1.1.1",
    "zone.js": "0.6.21"
  },
  "devDependencies": {
    "@types/es6-shim": "0.0.30",
    "@types/ws": "0.0.29",
    "nodemon": "^1.8.1",
    "typescript": "^2.0.0"
  }
}
