# merunyaa.xyz
Usage:
```js

import { parse, random } from 'merunyaa.xyz';

parse('9259')
  .then(images => {
    console.log(images.join(',\n'))
  });

random()
  .then(images => {
    console.log(images.join(',\n'))
  });

```
