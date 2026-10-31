// const add = require("./math");

// const result = add(10, 20);

// console.log(result);

// import { multiply } from "./math.js";

// const result = multiply(5, 20);

// console.log(result);

import { log } from "console";
import path from "path";

const filePath = "C:/NodeJs/index.js";

console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.dirname(filePath));

console.log(path.join("folder", "images", "photo.png"));
