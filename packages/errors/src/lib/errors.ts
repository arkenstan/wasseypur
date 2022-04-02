import { ErrorCodes, ErrorNames } from './error-list';
import { getMessage } from './messages/message.lib';

export interface WasseypurErrorDTO {
  name: string;
  message: string;
  code: number;
}

export class WasseypurError {
  readonly name: string;
  readonly message: string;
  readonly code: number;

  constructor({ name, message, code }: WasseypurErrorDTO) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
}

export class BadRequest extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.BadRequest,
      name: ErrorNames.BadRequest,
      message: message ?? getMessage(ErrorNames.BadRequest),
    };
    super(errorData);
  }
}

// 401 - Not Authenticated
export class NotAuthenticated extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.NotAuthenticated,
      name: ErrorNames.NotAuthenticated,
      message: message ?? getMessage(ErrorNames.NotAuthenticated),
    };
    super(errorData);
  }
}

// 402 - Payment Error
export class PaymentError extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.PaymentError,
      name: ErrorNames.PaymentError,
      message: message ?? getMessage(ErrorNames.PaymentError),
    };
    super(errorData);
  }
}

// 403 - Forbidden
export class Forbidden extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Forbidden,
      name: ErrorNames.Forbidden,
      message: message ?? getMessage(ErrorNames.Forbidden),
    };
    super(errorData);
  }
}

// 404 - Not Found
export class NotFound extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.NotFound,
      name: ErrorNames.NotFound,
      message: message ?? getMessage(ErrorNames.NotFound),
    };
    super(errorData);
  }
}

// 405 - Method Not Allowed
export class MethodNotAllowed extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.MethodNotAllowed,
      name: ErrorNames.MethodNotAllowed,
      message: message ?? getMessage(ErrorNames.MethodNotAllowed),
    };
    super(errorData);
  }
}

// 406 - Not Acceptable
export class NotAcceptable extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.NotAcceptable,
      name: ErrorNames.NotAcceptable,
      message: message ?? getMessage(ErrorNames.NotAcceptable),
    };
    super(errorData);
  }
}

// 408 - Timeout
export class Timeout extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Timeout,
      name: ErrorNames.Timeout,
      message: message ?? getMessage(ErrorNames.Timeout),
    };
    super(errorData);
  }
}

// 409 - Conflict
export class Conflict extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Conflict,
      name: ErrorNames.Conflict,
      message: message ?? getMessage(ErrorNames.Conflict),
    };
    super(errorData);
  }
}

// 410 - Gone
export class Gone extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Gone,
      name: ErrorNames.Gone,
      message: message ?? getMessage(ErrorNames.Gone),
    };
    super(errorData);
  }
}

// 411 - Length Required
export class LengthRequired extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.LengthRequired,
      name: ErrorNames.LengthRequired,
      message: message ?? getMessage(ErrorNames.LengthRequired),
    };
    super(errorData);
  }
}

// 422 Unprocessable
export class Unprocessable extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Unprocessable,
      name: ErrorNames.Unprocessable,
      message: message ?? getMessage(ErrorNames.Unprocessable),
    };
    super(errorData);
  }
}

// 429 Too Many Requests
export class TooManyRequests extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.TooManyRequests,
      name: ErrorNames.TooManyRequests,
      message: message ?? getMessage(ErrorNames.TooManyRequests),
    };
    super(errorData);
  }
}

// 500 - General Error
export class GeneralError extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.GeneralError,
      name: ErrorNames.GeneralError,
      message: message ?? getMessage(ErrorNames.GeneralError),
    };
    super(errorData);
  }
}

// 501 - Not Implemented
export class NotImplemented extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.NotImplemented,
      name: ErrorNames.NotImplemented,
      message: message ?? getMessage(ErrorNames.NotImplemented),
    };
    super(errorData);
  }
}

// 502 - Bad Gateway
export class BadGateway extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.BadGateway,
      name: ErrorNames.BadGateway,
      message: message ?? getMessage(ErrorNames.BadGateway),
    };
    super(errorData);
  }
}

// 503 - Unavailable
export class Unavailable extends WasseypurError {
  constructor(message?: string) {
    const errorData: WasseypurErrorDTO = {
      code: ErrorCodes.Unavailable,
      name: ErrorNames.Unavailable,
      message: message ?? getMessage(ErrorNames.Unavailable),
    };
    super(errorData);
  }
}
