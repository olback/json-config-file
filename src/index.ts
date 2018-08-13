import * as fs from 'fs';

interface Options {
    pretty: boolean;
}

class jcf {

    protected path: string;
    protected options: Options | undefined;
    public data: any | null = null;

    constructor(path: string, options?: Options) {

        this.path = path;
        this.options = options;

        try {

            this.data = JSON.parse(fs.readFileSync(path, 'utf8'));

        } catch (e) {

            console.log(e);

        }

    }

    save(): boolean {

        try {

            if (this.options && this.options.pretty) {

                fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), 'utf8');

            } else {

                fs.writeFileSync(this.path, JSON.stringify(this.data), 'utf8');

            }

            return true;

        } catch (e) {

            console.log(e);
            return false;

        }

    }

}

export = jcf;
