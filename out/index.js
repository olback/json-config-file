"use strict";
const fs = require("fs");
class jcf {
    constructor(path, options) {
        this.data = null;
        this.path = path;
        this.options = options;
        try {
            this.data = JSON.parse(fs.readFileSync(path, 'utf8'));
        }
        catch (e) {
            console.log(e);
        }
    }
    save() {
        try {
            if (this.options && this.options.pretty) {
                fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), 'utf8');
            }
            else {
                fs.writeFileSync(this.path, JSON.stringify(this.data), 'utf8');
            }
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}
module.exports = jcf;
//# sourceMappingURL=index.js.map