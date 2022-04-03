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

## Supported Error Classes

- BadRequest - 400
- NotAuthenticated - 401
- PaymentError - 402
- Forbidden - 403
- NotFound - 404
- MethodNotAllowed - 405
- NotAcceptable - 406
- Timeout - 408
- Conflict - 409
- Gone - 410
- LengthRequired - 411
- Unprocessable - 422
- TooManyRequests - 429
- GeneralError - 500
- NotImplemented - 501
- BadGateway - 502
- Unavailable - 503
