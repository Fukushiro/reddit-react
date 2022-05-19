interface IRetorno {
  response: any;
  funcionou: boolean;
  message: string;
}

export interface RetornoPadrao {
  message?: string;
  erro?: boolean;
}
export function success(response: any, message?: string, obj?: any) {
  return {
    response: response,
    funcionou: true,
    message: !!message ? message : '',
    obj: obj,
  };
}

export function failWithReturn(response: any, message?: string) {
  return {
    response: response,
    funcionou: false,
    message: !!message ? message : '',
  };
}

export function failNoReturn(message?: string) {
  return {
    response: null,
    funcionou: false,
    message: !!message ? message : '',
  };
}
export type { IRetorno };
