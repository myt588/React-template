interface KeyValue<T> {
  [key: string]: T;
}

interface APIError {
  code: string;
  message: string;
}

interface APIJSONPayload<T> {
  data: T;
  result: string;
  errors?: APIError[];
}

declare namespace API {
  interface PrivateResponse {
    message: string;
  }
}
