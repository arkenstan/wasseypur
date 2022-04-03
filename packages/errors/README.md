# @wasseypur/errors

Fun little NSFW error HTTP errors library which spouts wasseypur slangs as error messages.

> PLEASE DO NOT TRY THIS IN PRODUCTION ENVIRONMENTS

## Installation

> npm install --save @wasseypur/errors

---

## Usage

### In Typescript

```Typescript
import { BadRequest } from '@wasseypur/errors';

// For Throwing Errors
try{

  /* Logic code */
  throw new BadRequest();


}catch(error){

  // Catch and use error

}
```

### In Nodejs

```Javascript
const { BadRequest } = require('@wasseypur/errors');

// For Throwing Errors
try{

  /* Logic code */
  throw new BadRequest();


}catch(error){

  // Catch and use error

}
```
