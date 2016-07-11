import * as SocketIOClient from 'socket.io-client';

SocketIOClient.connect('http://localhost:3000');

const stage = new createjs.Stage('Game');
const circle = new createjs.Shape();
circle.graphics.beginFill('red').drawCircle(50, 50, 40);
stage.addChild(circle);
stage.update();
