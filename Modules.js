/*import { log } from "console";
import os from "os";
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());

console.log(os.cpus().length);*/

/*import { EventEmitter } from "events";

const myEvent = new EventEmitter();

myEvent.on("welcome", () => {
  console.log("welcome to node js");
});

myEvent.emit("welcome");*/

import { EventEmitter } from "events";

const myLogin = new EventEmitter();

myLogin.on("login", (username) => {
  console.log(`${username}, sucessfully logged in `);
});

myLogin.emit("login", "lucky");
