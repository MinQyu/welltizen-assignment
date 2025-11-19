import { HttpClient } from './api';

export class ApiClient extends HttpClient {
  constructor(baseUrl: string = 'http://localhost:3000') {
    super({ baseUrl });
  }
}

export const apiClient = new ApiClient();
