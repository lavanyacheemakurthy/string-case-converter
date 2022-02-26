## Installation
npm install string-case-converter

```
import {camelCase} from 'string-case-converter';
console.log(camelCase('This is a test string for CAMEL CASE'));
```

## Options
+ camelCase('Test me for CAMEL case') // returns testMeForCamelCase
+ pascalCase('test me FOR Pascal case') // returns TestMeForPascalCase
+ snakeCase('Test me for SNAKE case') // returns TEST_ME_FOR_SNAKE_CASE