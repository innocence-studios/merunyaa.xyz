# merunyaa.xyz
Used for parsing images from [merunyaa.xyz](https://merunyaa.xyz/) / generate random image

## Usage
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
