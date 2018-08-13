# json-config-file

Javascript:
```javascript
// Load the module
const jcf = require('json-config-file');

// Load the config file
const config = new jcf('path/to/config.json');

// Access properties like this
console.log(config.data.something1);
console.log(config.data.something2);

// Set properties like this
config.data.something1 = 'aaaa';
config.data.something2 = 'bbbb';

// Save your changes. This will overwrite your old config.
config.save(); // true / false

```

If you're working with TypeScript:
```typescript
import * as jcf from 'json-config-file';
```

