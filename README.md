## Installation
npm install string-case-converter

```
import {camelCase} from 'string-case-converter';
console.log(camelCase('This is a test string for CAMEL CASE'));
var snakeFormattedText = snakeCase('Test me for SNAKE case',{allLower:true}) // test_me_for_snake_case
```

## Options
### V1.0.0
+ camelCase('Test me for CAMEL case') // returns testMeForCamelCase
+ pascalCase('test me FOR Pascal case') // returns TestMeForPascalCase
+ snakeCase('Test me for SNAKE case') // returns TEST_ME_FOR_SNAKE_CASE
### V1.1.0
+ snakeCase('Test me for SNAKE case',{allLower:true}) // returns test_me_for_snake_case
+ kebabCase('test Me! for KEBAB case) // return test-me!-for-kebab-case