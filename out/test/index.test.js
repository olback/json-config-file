"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jcf = require("../index");
const config = new jcf('test.json', {
    pretty: true
});
console.log(config.save());
//# sourceMappingURL=index.test.js.map