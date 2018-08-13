interface Options {
    pretty: boolean;
}
declare class jcf {
    protected path: string;
    protected options: Options | undefined;
    data: any | null;
    constructor(path: string, options?: Options);
    save(): boolean;
}
export = jcf;
