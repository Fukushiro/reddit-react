interface IRetorno {
  response: any;
  funcionou: boolean;
}
export function success(response: any) {
  return { response: response, funcionou: true };
}

export function failWithReturn(response: any) {
  return { response: response, funcionou: false };
}

export function failNoReturn() {
  return { response: null, funcionou: false };
}
export type { IRetorno };
