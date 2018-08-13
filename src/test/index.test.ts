import * as jcf from '../index';

const config = new jcf('test.json', {
    pretty: true
});

console.log(config.save());
