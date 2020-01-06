export class APIClient {
  private token: string | undefined;

  constructor(token: string | undefined) {
    this.token = token;
  }

  public getPrivate() {
    return this.get<API.PrivateResponse>('private');
  }

  public postPrivate() {
    // this route does not exist, just an example
    return this.post<API.PrivateResponse>('private', { example: '123' });
  }

  private request<R>(path: string, method: string, params?: KeyValue<any>): Promise<R> {
    return fetch(`${process.env.ENDPOINT}/api/v1/${path}`, {
      method,
      body: JSON.stringify(params),
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'content-type': 'application/json; charset=utf-8'
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        // TODO: Error handling
        console.log(error);
      });
  }

  private get<T>(path: string, params?: KeyValue<any>): Promise<APIJSONPayload<T>> {
    return this.request(path, 'get', params);
  }

  private post<T>(path: string, params?: KeyValue<any>): Promise<APIJSONPayload<T>> {
    return this.request(path, 'post', params);
  }
}
